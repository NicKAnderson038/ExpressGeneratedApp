const express = require('express')

const router = express.Router()

const db = {}

router.post('/', ({ body }, res) => {
  for (const key in body) {
    db[key] = body[key]
  }
  res.json(db)
})

module.exports = router
