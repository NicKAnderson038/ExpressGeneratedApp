const express = require('express')

const router = express.Router()

const db = {}
// const db = new Map()

router.post('/', ({ body }, res) => {
  for (const key in body) {
    db[key] = body[key]
    // db.set(key, body[key])
  }
  // console.log(...db)
  // res.json([...db])
  res.json(db)
})

module.exports = router
