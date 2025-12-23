import express from 'express';
import { submitContact, getAllContacts } from '../controllers/contact.controller.js';
import { contactValidation, validateRequest } from '../middleware/validator.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', contactRateLimiter, contactValidation, validateRequest, submitContact);
router.get('/', getAllContacts); // Add authentication middleware for admin access

export default router;
