const db = require('../db/postgres')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const serverPublicKey = 'randomstupidinput'

module.exports = async function login(username, password) {
  const user = await db.oneOrNone(
    'SELECT * FROM accounts WHERE username = $1 LIMIT 1',
    username
  )
  if (user) {
    const passwordMatches = bcryptjs.compareSync(password, user.password_hash)
    if (passwordMatches) {
      const userData = {
        id: user?.user_id,
        username: user?.username,
        email: user?.email,
        lastLogin: user?.last_login,
        createdOn: user?.created_on
      }
      return { access_token: jwt.sign(userData, serverPublicKey) }
    }
  }
  return undefined
}
