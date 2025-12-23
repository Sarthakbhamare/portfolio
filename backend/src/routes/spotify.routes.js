import express from 'express';
import { getCurrentlyPlaying } from '../controllers/spotify.controller.js';

const router = express.Router();

router.get('/now-playing', getCurrentlyPlaying);

export default router;
