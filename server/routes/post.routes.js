const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/jwt.middleware')
const Post = require('../models/Post.model')
const User = require('../models/User.model')

router.get('/', isAuthenticated, (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .populate('user comments')
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.get('/onePost/:postId', (req, res) => {

    const { postId } = req.params //id del post
    Post
        .findById(postId)
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.post('/neww-postt', isAuthenticated, (req, res) => {

    const newPost = { ...req.body, user: req.payload._id }

    Post
        .create(newPost)
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:id/edit-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:id/push-comment-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndUpdate(id, { $push: { comments: req.body } })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/:commentId/pull-comment-post', (req, res) => {
    const { postId, commentId } = req.params

    Post
        .findByIdAndUpdate(postId, { $pull: { comments: commentId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/push-like', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    Post
        .findByIdAndUpdate(postId, { $push: { likes: _id } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/pull-like', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    Post
        .findByIdAndUpdate(postId, { $pull: { likes: _id } })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/push-post-user', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $push: { posts: postId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/pull-post-user', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $pull: { posts: postId } })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.delete('/:id/delete-post', (req, res) => {
    const { id } = req.params

    Post
        .findByIdAndDelete(id)
        .then(() => res.status(200))
        .catch(err => res.status(444).json(err))
})

module.exports = router