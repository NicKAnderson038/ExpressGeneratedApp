const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { terminal } = require('../utils/console.js')
require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')
// const validateUser = require('./validateUser')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

terminal({ message: 'success', code: 200 })
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  })
})

app.use('/api/v1', api)
// app.use('/api/protected', validateUser)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
