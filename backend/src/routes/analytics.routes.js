import express from 'express';
import { trackPageView, getAnalytics } from '../controllers/analytics.controller.js';

const router = express.Router();

router.post('/track', trackPageView);
router.get('/', getAnalytics); // Add authentication middleware for admin access

export default router;
