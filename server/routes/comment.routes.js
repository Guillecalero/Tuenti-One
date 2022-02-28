const router = require('express').Router()

const Comment = require('../models/Comment.model')

router.get('/', (req, res) => {
    Comment
        .find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.post('/neww-commentt', (req, res) => {
    Comment
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:id/edit-comment', (req, res) => {
    const { id } = req.params

    Comment
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id/delete-comment', (req, res) => {
    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(() => res.json(`comentario eliminado => ${id}`))
        .catch(err => res.status(400).json(err))
})

module.exports = router