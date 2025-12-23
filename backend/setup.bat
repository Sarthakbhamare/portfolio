@echo off
REM Portfolio Backend - GitHub & Deployment Setup Script

echo.
echo 🚀 Portfolio Backend - Setup Guide
echo ==================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Portfolio backend setup"
    echo ✅ Git initialized
) else (
    echo ✅ Git repository already exists
)

echo.
echo 📌 Next Steps to Deploy:
echo.
echo 1️⃣  Create GitHub Repository:
echo    - Go to https://github.com/new
echo    - Name: portfolio-backend
echo    - Click 'Create repository'
echo.
echo 2️⃣  Push to GitHub:
echo    git remote add origin https://github.com/YOUR-USERNAME/portfolio-backend.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3️⃣  Choose Deployment Platform:
echo.
echo    Option A ^(Recommended^): Railway
echo    - Go to https://railway.app
echo    - Sign in with GitHub
echo    - Create new project ^→ Connect GitHub repo
echo.
echo    Option B: Render
echo    - Go to https://render.com
echo    - Sign in with GitHub
echo    - Create Web Service ^→ Connect GitHub repo
echo.
echo    Option C: Heroku
echo    - Go to https://heroku.com
echo    - Create new app ^→ Connect GitHub repo
echo.
echo 4️⃣  Set Environment Variables:
echo    - MONGODB_URI ^(MongoDB Atlas free tier^)
echo    - EMAIL_* ^(Gmail or other provider^)
echo    - SPOTIFY_* ^(Spotify API keys^)
echo    - ALLOWED_ORIGINS ^(your frontend URL^)
echo.
echo 📚 Full guide: See DEPLOYMENT.md
echo.
echo ✨ You're all set! Push to GitHub and deploy!
echo.
