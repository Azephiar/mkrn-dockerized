const Router = require('koa-router')
const router = new Router()
const Mongo = require('../utils/db')
const response = require('../utils/response')

router.get('/api/hello', async (ctx) => {
    await response.success(ctx, "Hello world")
})

module.exports = router