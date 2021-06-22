const router = require('express').Router()

router.get('', async (_request, response) => {
  const db = await require('../../db/postgres')
  const results = await db.any('SELECT * FROM accounts')
  response.json(results)
})

module.exports = router