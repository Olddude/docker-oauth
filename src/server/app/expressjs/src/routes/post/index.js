const router = require('express').Router()
const readPosts = require('../../db/post/read')

router.get('', async (_request, response) => {
  const posts = await readPosts()
  if (posts) {
    response.json(posts)
  } else {
    response.status(500)
    response.json({ message: 'could not read posts' })
  }
})

module.exports = router
