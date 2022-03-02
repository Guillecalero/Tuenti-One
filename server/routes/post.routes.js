const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/jwt.middleware')
const POSTS = require('../models/Post.model')
const Comment = require('../models/Comment.model')

router.get('/', (req, res) => {
    POSTS
        .find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.post('/neww-postt', isAuthenticated, (req, res) => {

    const newPost = { ...req.body, user: req.payload._id }

    POSTS
        .create(newPost)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:id/edit-post', (req, res) => {
    const { id } = req.params

    POSTS
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id/delete-post', (req, res) => {
    const { id } = req.params

    POSTS
        .findByIdAndDelete(id)
        .then(() => res.json(`comentario eliminado => ${id}`))
        .catch(err => res.status(400).json(err))
})

module.exports = router