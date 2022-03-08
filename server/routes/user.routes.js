const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/jwt.middleware')
const User = require('../models/User.model')

router.get('/getUserById/:user_id', (req, res) => {

    const { user_id } = req.params
    User
        .findById(user_id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.get('/getUser/:username', (req, res) => {

    const { username } = req.params
    User
        .findOne({ username })
        .populate('friends')
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put('/:username/edit-profile', (req, res) => {
    const { username } = req.params

    User
        .findOneAndUpdate({ username }, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.get('/', (req, res) => {

    User
        .find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.put(`/:eachUser_id/addFriend`, isAuthenticated, (req, res) => {
    const { eachUser_id } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $push: { friends: eachUser_id } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

module.exports = router