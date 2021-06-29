const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/post', require('./post'))

router.get('', (req, res) => {
  res.json({
    info: 'Post ExpressJS Server',
    user: req.user
  })
})

module.exports = router
