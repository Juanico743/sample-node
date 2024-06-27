const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

//blog routes

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_creat_post);

router.get('/create', blogController.blog_creat_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete_post);

module.exports = router;