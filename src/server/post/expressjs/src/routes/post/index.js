const router = require('express').Router()
const readPosts = require('../../db/post/read')

router.get('', async (_request, response, next) => {
  await readPosts()
    .then(posts => {
      response.json(posts)
    })
    .catch(() => {
      response.status(500)
      response.json({ message: 'could not read posts from db' })
    })
    .finally(() => {
      next()
    })
})

module.exports = router
