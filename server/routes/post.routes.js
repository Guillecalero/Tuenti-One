const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/jwt.middleware')
const Post = require('../models/Post.model')
const User = require('../models/User.model')

router.get('/', isAuthenticated, (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .populate('user comments')
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json(err))
})

router.get('/onePost/:id', (req, res) => {

    const { id } = req.params
    Post
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.post('/neww-postt', isAuthenticated, (req, res) => {

    const newPost = { ...req.body, user: req.payload._id }

    Post
        .create(newPost)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:id/edit-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:id/push-comment-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndUpdate(id, { $push: { comments: req.body } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:postId/:commentId/pull-comment-post', (req, res) => {
    const { postId, commentId } = req.params

    Post
        .findByIdAndUpdate(postId, { $pull: { comments: commentId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:postId/:userId/push-like', (req, res) => {
    const { postId, userId } = req.params

    Post
        .findByIdAndUpdate(postId, { $push: { likes: userId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:postId/:userId/pull-like', (req, res) => {
    const { postId, userId } = req.params

    Post
        .findByIdAndUpdate(postId, { $pull: { likes: userId } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:userId/:postId/push-post-user', (req, res) => {
    const { postId, userId } = req.params

    User
        .findByIdAndUpdate(userId, { $push: { posts: postId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:userId/:postId/pull-post-user', (req, res) => {
    const { postId, userId } = req.params

    User
        .findByIdAndUpdate(userId, { $pull: { posts: postId } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id/delete-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndDelete(id)
        .then(() => res.json(`comentario eliminado => ${id}`))
        .catch(err => res.status(400).json(err))
})

module.exports = router