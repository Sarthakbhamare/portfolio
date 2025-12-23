# Deployment Guide for Portfolio Backend

## Quick Start - Deploy in 5 minutes

### Option 1: Railway (Recommended - Easiest)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project
4. Connect your GitHub repository
5. Add environment variables from `.env.example`
6. Deploy!

**Environment Variables to Add:**
- `MONGODB_URI` - MongoDB connection string
- `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_HOST`, `EMAIL_PORT` - Email config
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` - Spotify
- `ALLOWED_ORIGINS` - Frontend URL (e.g., https://sarthakbhamare.com)

### Option 2: Render (Also Easy)
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create new Web Service
4. Connect your portfolio repository (select the `backend` directory)
5. Set environment variables
6. Deploy!

### Option 3: Heroku (Free tier ended)
1. Go to [heroku.com](https://heroku.com)
2. Create a new app
3. Connect to GitHub
4. Add buildpacks (Node.js)
5. Set environment variables
6. Deploy!

### Option 4: Self-hosted (VPS)
```bash
# SSH into your server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB (or use MongoDB Atlas)
sudo apt-get install -y mongodb

# Clone repository
git clone https://github.com/your-username/portfolio.git
cd portfolio/backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your settings

# Install PM2 for process management
sudo npm install -g pm2

# Start the app
pm2 start src/server.js --name "portfolio-api"
pm2 startup
pm2 save

# Setup Nginx as reverse proxy
sudo apt-get install -y nginx

# Configure Nginx (edit /etc/nginx/sites-available/default)
# Point to http://localhost:5000

# Get SSL certificate
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.yourdomain.com
```

## GitHub Setup

### 1. Initialize Git (if not already done)
```bash
cd portfolio/backend
git init
git add .
git commit -m "Initial commit: Portfolio backend setup"
```

### 2. Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio-backend` (or similar)
3. Add description: "Backend API for my portfolio"
4. Choose public or private
5. Click "Create repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio-backend.git
git branch -M main
git push -u origin main
```

### 4. Setup GitHub Secrets (for CI/CD)
Go to Settings → Secrets and Variables → Actions
Add:
- `RAILWAY_TOKEN` - Get from Railway dashboard
- `MONGODB_URI` - Your MongoDB connection string

## MongoDB Setup

### Option A: MongoDB Atlas (Cloud)
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up free
3. Create a cluster (M0 free tier)
4. Create a database user
5. Copy connection string
6. Add to `.env`: `MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio`

### Option B: Local MongoDB
```bash
# Install MongoDB Community Edition
# Then start MongoDB service

# Connection string: mongodb://localhost:27017/portfolio
```

## Email Configuration

### Gmail Setup (for contact form)
1. Enable 2-factor authentication on your Google account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select Mail and Windows Computer
4. Generate app password
5. Add to `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   ```

### Other Email Providers
- SendGrid: `sgMail` package
- Mailgun: `nodemailer` with Mailgun
- AWS SES: `@aws-sdk/client-ses`

## Spotify Setup

1. Go to [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Create an application
3. Accept the terms and create
4. Get Client ID and Client Secret
5. Set Redirect URI to `http://localhost:3000` (or your app URL)
6. Go to Spotify Web API to get your refresh token:
   - Use the [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/)
   - Or use a [token generator](https://www.spotify.com/login)
7. Add to `.env`:
   ```
   SPOTIFY_CLIENT_ID=your-client-id
   SPOTIFY_CLIENT_SECRET=your-client-secret
   SPOTIFY_REFRESH_TOKEN=your-refresh-token
   ```

## Testing Locally

```bash
# Start the server
npm run dev

# Test endpoints
curl http://localhost:5000/health

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## Monitoring

### Railway Dashboard
- View logs in real-time
- Monitor CPU, memory, network
- Automatic deployments on push

### PM2 (Self-hosted)
```bash
pm2 monit
pm2 logs portfolio-api
pm2 restart portfolio-api
```

## Troubleshooting

**App won't start?**
- Check `npm start` works locally
- Verify all environment variables are set
- Check logs in deployment dashboard

**Connection timeout?**
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Make sure CORS is configured

**Email not sending?**
- Verify email credentials
- Check if "Less secure apps" is enabled (Gmail)
- Check email logs in deployment

**Port issues?**
- Most platforms auto-assign PORT env variable
- Don't hardcode port, use `process.env.PORT || 5000`

## Performance Tips

1. Use MongoDB indexes (already done in models)
2. Enable compression (already done)
3. Use CDN for static files
4. Monitor with Railway/Render dashboards
5. Set up error tracking (Sentry)

## Next Steps

1. Connect frontend to backend: Update API URLs in frontend
2. Add authentication for admin endpoints
3. Add email verification for guestbook
4. Setup automated backups for MongoDB
5. Monitor analytics and performance
