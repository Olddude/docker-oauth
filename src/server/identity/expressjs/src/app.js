const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const express = require('express')

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors({ origin: '*' }))
app.use('/', require('./routes'))

module.exports = app
