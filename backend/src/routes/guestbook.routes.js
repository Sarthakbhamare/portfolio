import express from 'express';
import { 
  createEntry, 
  getEntries, 
  approveEntry, 
  deleteEntry 
} from '../controllers/guestbook.controller.js';
import { guestbookValidation, validateRequest } from '../middleware/validator.js';

const router = express.Router();

router.post('/', guestbookValidation, validateRequest, createEntry);
router.get('/', getEntries);
router.patch('/:id/approve', approveEntry); // Add authentication middleware
router.delete('/:id', deleteEntry); // Add authentication middleware

export default router;
