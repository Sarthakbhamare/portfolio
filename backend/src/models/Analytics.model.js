import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    index: true
  },
  referrer: String,
  userAgent: String,
  ip: String,
  country: String,
  device: {
    type: String,
    enum: ['mobile', 'tablet', 'desktop', 'unknown'],
    default: 'unknown'
  },
  browser: String,
  os: String
}, {
  timestamps: true
});

// Index for analytics queries
analyticsSchema.index({ createdAt: -1 });
analyticsSchema.index({ path: 1, createdAt: -1 });

export const Analytics = mongoose.model('Analytics', analyticsSchema);
