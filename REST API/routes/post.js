const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/postsByCategory/:categoryId', controllers.post.get.postsByCategory)
router.get('/getPostsByUserId/:userId', controllers.post.get.getPostsByUserId);
router.get('/getPostById/:postId', controllers.post.get.getPostById)

router.post('/createPost', controllers.post.post.createPost)
router.post('/vote', controllers.post.post.makeVote)
router.delete('/deletePost/:postId', controllers.post.delete.deletePost)

module.exports = router;