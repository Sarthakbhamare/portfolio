import { chromium } from 'playwright';
import fs from 'fs';

const PAGES = [
  { name: 'home', url: 'https://aayushbharti.in' },
  { name: 'about', url: 'https://aayushbharti.in/about' },
  { name: 'projects', url: 'https://aayushbharti.in/projects' },
  { name: 'blog', url: 'https://aayushbharti.in/blog' },
];

async function measureSite() {
  const browser = await chromium.launch();
  const results = {};

  for (const page of PAGES) {
    console.log(`\n📸 Analyzing ${page.name} (${page.url})...`);
    const context = await browser.newContext();
    const pageObj = await context.newPage();
    
    try {
      await pageObj.goto(page.url, { waitUntil: 'networkidle' });
      await pageObj.waitForTimeout(2000); // Wait for animations
      
      // Take screenshot
      await pageObj.screenshot({ path: `f:\\portfolio\\screenshots\\${page.name}.png` });
      
      // Extract design tokens
      const tokens = await pageObj.evaluate(() => {
        const getComputedStyle = (el) => {
          if (!el) return null;
          const style = window.getComputedStyle(el);
          return {
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
            color: style.color,
            backgroundColor: style.backgroundColor,
            padding: style.padding,
            margin: style.margin,
            borderRadius: style.borderRadius,
            boxShadow: style.boxShadow,
            backdropFilter: style.backdropFilter,
            opacity: style.opacity,
            gap: style.gap,
            minHeight: style.minHeight,
          };
        };

        const measurements = {};

        // Nav measurements
        const nav = document.querySelector('header nav, [role="navigation"]');
        if (nav) {
          const rect = nav.getBoundingClientRect();
          measurements.nav = {
            height: `${rect.height}px`,
            width: `${rect.width}px`,
            styles: getComputedStyle(nav),
          };
        }

        // Hero section measurements
        const hero = document.querySelector('section[id="home"], main > section:first-child');
        if (hero) {
          const rect = hero.getBoundingClientRect();
          const h1 = hero.querySelector('h1');
          measurements.hero = {
            minHeight: window.getComputedStyle(hero).minHeight,
            paddingTop: window.getComputedStyle(hero).paddingTop,
            paddingBottom: window.getComputedStyle(hero).paddingBottom,
            h1Style: h1 ? getComputedStyle(h1) : null,
          };
        }

        // Card measurements
        const cards = document.querySelectorAll('[class*="glass"], [class*="card"]');
        if (cards.length > 0) {
          measurements.card = getComputedStyle(cards[0]);
        }

        // Section measurements
        const sections = document.querySelectorAll('section');
        if (sections.length > 0) {
          measurements.section = {
            maxWidth: window.getComputedStyle(sections[0]).maxWidth,
            paddingLeft: window.getComputedStyle(sections[0]).paddingLeft,
            paddingRight: window.getComputedStyle(sections[0]).paddingRight,
            paddingTop: window.getComputedStyle(sections[0]).paddingTop,
            paddingBottom: window.getComputedStyle(sections[0]).paddingBottom,
          };
        }

        // CSS Variables (design tokens)
        const root = document.documentElement;
        const vars = {};
        const style = window.getComputedStyle(root);
        for (let i = 0; i < style.length; i++) {
          const propName = style[i];
          if (propName.startsWith('--')) {
            vars[propName] = style.getPropertyValue(propName).trim();
          }
        }
        measurements.cssVariables = vars;

        return measurements;
      });

      results[page.name] = tokens;
      console.log(`✅ ${page.name}: Analyzed`);
      console.log(JSON.stringify(tokens, null, 2));
      
    } catch (error) {
      console.error(`❌ Error on ${page.name}:`, error.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();

  // Save results
  fs.writeFileSync(
    'f:\\portfolio\\design-tokens-measured.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n📊 Results saved to design-tokens-measured.json');
}

measureSite().catch(console.error);
