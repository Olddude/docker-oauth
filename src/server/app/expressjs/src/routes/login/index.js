const router = require('express').Router()

router.post('', async (_request, response) => {
  response.status(500)
})

module.exports = router
