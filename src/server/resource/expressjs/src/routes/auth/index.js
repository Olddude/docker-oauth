const router = require('express').Router()
const uriTemplate = require('uri-templates')
const { get } = require('got')

router.use('/callback', require('./callback'))

router.get('', async (_req, res, next) => {
  const redirect_url = uriTemplate(
    'http://localhost:3002/auth/callback{?response_type,scope,state}'
  ).fillFromObject({
    response_type: 'code',
    scope: 'email+account',
    state: undefined
  })
  const url = uriTemplate('http://localhost:3001/auth{?access_type,client_id,redirect_url}')
    .fillFromObject({
      access_type: 'online',
      client_id: 'post-server',
      redirect_url
    })
  await get(url)
    .then(authResponse => {
      res.json(JSON.parse(authResponse))
    })
    .catch(error => {
      res.status(403).json({ message: error.message })
    })
    .finally(() => {
      next()
    })
})

module.exports = router
