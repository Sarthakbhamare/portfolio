#!/bin/bash

# Portfolio Frontend - GitHub Pages Setup Script

echo ""
echo "🚀 Portfolio Frontend - GitHub Pages Setup"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio frontend"
    echo "✅ Git initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📌 Next Steps:"
echo ""
echo "1️⃣  Create GitHub Repository:"
echo "   - Go to https://github.com/new"
echo "   - Name: portfolio (or your-name)"
echo "   - Description: My Portfolio Website"
echo "   - Choose: Public"
echo "   - Click 'Create repository'"
echo ""
echo "2️⃣  Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Enable GitHub Pages:"
echo "   - Go to Repository Settings"
echo "   - Scroll to 'Pages' section"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main / (root)"
echo "   - Save"
echo ""
echo "4️⃣  Auto-deployment:"
echo "   - The GitHub Actions workflow is already set up"
echo "   - Every push to main will auto-deploy"
echo "   - Check Actions tab to see deployment status"
echo ""
echo "5️⃣  Frontend will be live at:"
echo "   https://YOUR-USERNAME.github.io/portfolio"
echo ""
echo "6️⃣  (Optional) Connect your domain:"
echo "   - Add CNAME file with your domain"
echo "   - Update DNS records"
echo ""
echo "✨ Frontend deployed! Now deploy the backend:"
echo "   cd backend"
echo "   - Push backend to GitHub"
echo "   - Deploy on Railway/Render"
echo ""
