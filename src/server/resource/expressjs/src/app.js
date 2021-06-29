const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const jwt = require('express-jwt')

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors({ origin: '*' }))
app.use(jwt({
  secret: 'randomstupidinput',
  algorithms: ['HS256'],
  getToken: (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}).unless({
  path: ['/auth']
}))
app.use((err, _req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'invalid token' })
  }
  next()
})
app.use('/', require('./routes'))


module.exports = app
