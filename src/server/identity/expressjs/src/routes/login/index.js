const router = require('express').Router()
const login = require('../../services/login')
const extractAuth = require('../../services/extract-auth')

router.post('', async (request, response) => {
  const { username, password } = extractAuth(request.headers.authorization)
  const user = await login(username, password)
  if (user) {
    response.json(user)
  } else {
    response.status(401)
    response.json({ message: 'invalid login' })
  }

})

module.exports = router
