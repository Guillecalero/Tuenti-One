const router = require('express').Router()
const User = require('../models/User.model')

router.get('/:id', (req, res) => {

    const { id } = req.params
    User
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:id/edit-profile', (req, res) => {
    const { id } = req.params

    User
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.get('/', (req, res) => {

    User
        .find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})



module.exports = router