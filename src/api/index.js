const express = require('express')

const emojis = require('./emojis')
const posts = require('./posts')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  })
})

router.use('/emojis', emojis)
router.use('/posts', posts)

module.exports = router
