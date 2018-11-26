const Koa = require('koa')
const app = new Koa()

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
const router = require('./router')

app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
	console.error('server error', err);
});

app.listen(3000)