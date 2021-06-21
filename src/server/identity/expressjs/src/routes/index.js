const router = require('express').Router()

router.get('', (_request, response) => {
  response.json({
    info: 'Node.js Express Postgres Identity Provider'
  })
})

module.exports = router
