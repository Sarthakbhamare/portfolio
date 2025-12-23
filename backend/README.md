# Portfolio Backend API

Backend API for Sarthak Bhamare's Portfolio website.

## Features

- **Contact Form**: Handle contact form submissions with email notifications
- **Guestbook**: Manage guestbook entries with approval system
- **Analytics**: Track page views and visitor statistics
- **Spotify Integration**: Display currently playing track
- **Rate Limiting**: Protect against abuse
- **Input Validation**: Sanitize and validate all inputs
- **Error Handling**: Centralized error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer for emails
- Express Validator
- Rate Limiting
- Helmet for security

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration

3. **Start MongoDB**
   Make sure MongoDB is running locally or use MongoDB Atlas

4. **Run the server**
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Guestbook
- `POST /api/guestbook` - Create guestbook entry
- `GET /api/guestbook` - Get approved entries
- `PATCH /api/guestbook/:id/approve` - Approve entry (admin)
- `DELETE /api/guestbook/:id` - Delete entry (admin)

### Analytics
- `POST /api/analytics/track` - Track page view
- `GET /api/analytics` - Get analytics data (admin)

### Spotify
- `GET /api/spotify/now-playing` - Get currently playing track

### Health
- `GET /health` - Health check endpoint

## Environment Variables

See `.env.example` for all required environment variables.

## Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting on all routes
- Stricter rate limiting on contact form
- Input validation and sanitization
- MongoDB injection protection

## Deployment

### Railway/Render/Heroku
1. Connect your GitHub repository
2. Add environment variables
3. Deploy

### VPS (DigitalOcean, AWS, etc.)
1. SSH into your server
2. Clone the repository
3. Install dependencies
4. Set up PM2 for process management
5. Configure Nginx as reverse proxy

## License

MIT
