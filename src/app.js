const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const chalk = require('chalk')
const log = console.log

require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')

const app = express()

app.use(morgan('dev'))
app.use(helmet())

app.get('/', (req, res) => {
  log(chalk.blue('Hello') + ' World' + chalk.red('!'))
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  })
})

app.use('/api/v1', api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
