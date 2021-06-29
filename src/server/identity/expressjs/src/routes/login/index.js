const router = require('express').Router()
const login = require('../../services/login')
const extractAuth = require('../../services/extract-auth')

router.post('', async (request, response) => {
  const { username, password } = extractAuth(request.headers.authorization)
  const accessTokenResponse = await login(username, password)
  if (accessTokenResponse) {
    response.json(accessTokenResponse)
  } else {
    response.status(401).json({
      message: 'Unauthorized'
    })
  }
})

module.exports = router
