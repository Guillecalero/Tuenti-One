const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
//const { isAuthenticated } = require('./../middlewares/jwt.middleware')

const router = express.Router()
const saltRounds = 10

router.post('/register', (req, res) => {

    const { email, password, username, nameUser, surnameUser, imageURL } = req.body

    if (email === '' || password === '' || username === '' || nameUser === '' || surnameUser === '') {
        res.status(400).json({ message: 'Se requiere email, contraseña, nombre de usuario y nombre completo' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Tu contraseña debe tener al menos 3 caracteres' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (foundUser) {
                res.status(401).json({ message: 'Usuari@ ya existente' })
                return
            }
            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)
            return User.create({ email, password: hashedPassword, username, nameUser, surnameUser })
                .then((createdUser) => {
                    const { email, username, nameUser, surnameUser, password, _id } = createdUser
                    const user = { email, username, nameUser, surnameUser, password, _id }
                    res.status(201).json({ user })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ message: 'Error interno del servidor' })
                })
        })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: 'Introduce un correo y contraseña.' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {

            if (!foundUser) {
                res.status(401).json({ message: 'Usuario no encontrado.' })
            }
            if (bcrypt.compareSync(password, foundUser.password)) {
                const { _id, email, password } = foundUser
                const payload = { _id, email, password }
                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: '6h' }
                )
                res.status(401).json({ authToken })
            }
            else {
                res.status(401).json({ message: 'No se ha podido autenticar al usuari@' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error interno del servidor' })
        })
})

module.exports = router


