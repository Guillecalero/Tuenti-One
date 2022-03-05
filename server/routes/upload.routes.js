const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageURL'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error, el archivo aún no se ha cargado.' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router