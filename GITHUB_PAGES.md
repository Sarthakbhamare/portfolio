# GitHub Pages Deployment Complete ✅

Your Portfolio Frontend is now set up for automatic deployment to GitHub Pages!

## What's Been Done

✅ Created GitHub Actions workflow (`.github/workflows/deploy-pages.yml`)
✅ Configured auto-deployment on every push to main
✅ Ready to build and deploy Vite React app

## Quick Start - 3 Steps

### Step 1: Create GitHub Repository
```bash
# Go to https://github.com/new
# Create a repository named "portfolio"
```

### Step 2: Push to GitHub
```bash
cd f:/portfolio

git init
git add .
git commit -m "Initial commit: Portfolio website"

git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Directory: **/(root)**
4. Click **Save**

## Done! 🎉

Your website will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

Check the **Actions** tab to see the deployment progress (takes 2-3 minutes)

## Deploy Backend Too

```bash
cd backend

# Push backend to GitHub
git init
git add .
git commit -m "Initial commit: Portfolio backend API"

git remote add origin https://github.com/YOUR-USERNAME/portfolio-backend.git
git branch -M main
git push -u origin main

# Then deploy on Railway/Render (see backend/DEPLOYMENT.md)
```

## Update Frontend API URL

Once your backend is deployed, update the API calls in your frontend:

**File: `src/` (wherever you make API calls)**
```typescript
const API_URL = 'https://your-backend.railway.app';

// Instead of
const API_URL = 'http://localhost:5000';
```

## Custom Domain (Optional)

To use your own domain:

1. **Add CNAME file:**
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **Update DNS:**
   - Point your domain to GitHub's nameservers
   - Or use CNAME to `your-username.github.io`

3. **Update in GitHub:**
   - Go to Settings → Pages
   - Set custom domain to `yourdomain.com`
   - Enable "Enforce HTTPS"

---

**Happy deploying! 🚀**
