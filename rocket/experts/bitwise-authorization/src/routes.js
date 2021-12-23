const Router = require('koa-router')

const { authorization: authorizationConfig } = require('../config')
const { permissions } = authorizationConfig
// middlewares
const error = require('./middlewares/error')
const authenticated = require('./middlewares/auth')
const authorized = require('./middlewares/authorization')

// handlers
const users = require('./handlers/users')
const auth = require('./handlers/auth')

const router = new Router()

router.use(error)

router.get('/users', authenticated, authorized(permissions.manageUsers), users.getAllUsers)
router.post('/users', authenticated, users.createUser)

router.post('/auth', auth.authenticate)

module.exports = router
