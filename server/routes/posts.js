import express from 'express';

const router = express.Router();

// localhost:5000/posts
router.get('/', (req, res) => {
    res.send('api routes works at "/"');
});


export default router;