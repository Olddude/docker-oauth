const router = require('express').Router()

router.get('', (_request, response) => {
  response.json({
    info: 'Post ExpressJS Server'
  })
})

module.exports = router
