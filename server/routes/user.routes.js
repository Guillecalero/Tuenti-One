const router = require('express').Router()
const User = require('../models/User.model')

router.put('/:id/edit-profile', (req, res) => {
    const { id } = req.params

    User
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

module.exports = router