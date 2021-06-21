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
app.use('/login', require('./routes/login'))
app.use('/accounts', require('./routes/accounts'))
app.use('/roles', require('./routes/roles'))
app.use('/account_roles', require('./routes/account_roles'))

module.exports = app
