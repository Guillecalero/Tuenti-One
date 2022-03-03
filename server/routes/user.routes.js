const router = require('express').Router()
const User = require('../models/User.model')

router.get('/getUserById/:user_id', (req, res) => {

    const { user_id } = req.params
    User
        .findOne({ user_id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.get('/getUser/:username', (req, res) => {

    const { username } = req.params
    User
        .findOne({ username })
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