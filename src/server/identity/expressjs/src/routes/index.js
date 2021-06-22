const router = require('express').Router()

router.get('', (_request, response) => {
  response.json({
    info: 'Identity ExpressJS Server'
  })
})

module.exports = router
