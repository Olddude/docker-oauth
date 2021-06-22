const router = require('express').Router()

router.get('', (_request, response) => {
  response.json({
    info: 'App ExpressJS Server'
  })
})

module.exports = router
