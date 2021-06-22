const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const express = require('express')

const app = express()

// MIDDLEWARE

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors({ origin: '*' }))

// ROUTES

app.use('/', require('./routes'))
app.use('/post', require('./routes/post'))

module.exports = app
