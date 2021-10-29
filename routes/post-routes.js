const express = require('express');
const router = express.Router();
const {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost
} = require('../controllers/post-controller');


router.get('/posts/:id', getPost);  
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.delete('/posts/:id', deletePost); 
router.get('/posts', getPosts);
router.post('/add-post', addPost);
router.get('/add-post', getAddPost);

module.exports = router;