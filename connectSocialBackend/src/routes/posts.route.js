const express = require('express');
const { createPost, fetchUserPosts, fetchOtherUsersPosts, likePost, unlikePost } = require('../controllers/post.controller.js');

const router = express.Router();

// Create a new post
router.post('/new-post', createPost);
router.get('/my-posts', fetchUserPosts);
router.get('/other-posts', fetchOtherUsersPosts);

router.post('/like/:postId', likePost);
router.delete('/like/:postId', unlikePost); 


module.exports = router;
