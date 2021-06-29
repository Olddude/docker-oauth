const router = require('express').Router()

router.use('/account_roles', require('./account_roles'))
router.use('/accounts', require('./accounts'))
router.use('/auth', require('./auth'))
router.use('/roles', require('./roles'))
router.use('/login', require('./login'))

router.get('', (_request, response) => {
  response.json({
    info: 'Identity ExpressJS Server'
  })
})

module.exports = router
