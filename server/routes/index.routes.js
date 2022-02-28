const router = require("express").Router()

router.get("/", (req, res, next) => res.json("All good in here"))

router.use('/post', require('./post.routes'))

router.use('/comment', require('./comment.routes'))

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
