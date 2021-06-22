const db = require('../db/postgres')
const bcryptjs = require('bcryptjs')

module.exports = async function login(username, password) {
  const user = await db.oneOrNone(
    'SELECT * FROM accounts WHERE username = $1 LIMIT 1',
    username
  )
  console.log(user)
  return user && bcryptjs.compareSync(password, user.password_hash)
    ? {
      id: user?.user_id,
      username: user?.username,
      email: user?.email,
      lastLogin: user?.last_login,
      createdOn: user?.created_on
    }
    : undefined
}
