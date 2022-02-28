const router = require('express').Router()
const POSTS = require('../models/Post.model')

router.get('/', (req, res) => {
    POSTS
        .find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.post('/neww-postt', (req, res) => {
    POSTS
        .create(req.body)
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