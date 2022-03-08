const { isAuthenticated } = require('../middlewares/jwt.middleware')
const Private = require('../models/Private.model')
const User = require('../models/User.model')

const router = require('express').Router()

router.get('/', (req, res) => {
    Private
        .find()
        .populate('user comments')
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.get('/getPrivatePost/:postId', (req, res) => {

    const { postId } = req.params

    Private
        .findById(postId)
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.post('/new-private-post', isAuthenticated, (req, res) => {
    const privatePost = { ...req.body, user: req.payload._id }

    Private
        .create(privatePost)
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/push-privatePost-user', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $push: { privatePosts: postId } }, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

router.put('/:postId/pull-privatePost-user', isAuthenticated, (req, res) => {
    const { postId } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $pull: { privatePosts: postId } })
        .then(data => res.json(data))
        .catch(err => res.status(444).json(err))
})

module.exports = router