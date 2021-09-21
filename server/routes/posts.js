import express from 'express';
import { get_posts, create_post } from '../controllers/posts.js'
const router = express.Router();

// localhost:5000/posts
router.get('/', get_posts);
router.post('/', create_post);

export default router;