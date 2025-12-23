import mongoose from 'mongoose';

const guestbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [500, 'Message cannot exceed 500 characters']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  website: {
    type: String,
    trim: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  ip: {
    type: String
  }
}, {
  timestamps: true
});

// Index for faster queries
guestbookSchema.index({ createdAt: -1 });
guestbookSchema.index({ isApproved: 1 });

export const Guestbook = mongoose.model('Guestbook', guestbookSchema);
