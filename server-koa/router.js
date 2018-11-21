const sql = require('./config/default')
const Router = require('koa-router')
const router = new Router()
const user = require('./controller/user')

router.post('/user/signup', user.signup)
router.post('/user/login', user.login)
router.post('/user/getUser', user.getUser)


module.exports = router