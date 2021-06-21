const pgp = require('pg-promise')({})
const db = pgp({ database: 'identity', user: 'admin', password: 'password' })
module.exports = db
