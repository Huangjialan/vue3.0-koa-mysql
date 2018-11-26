const sql = require('../config/default')
const sleep = async(ms) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true)
		}, ms)
	})
}
module.exports = {
	//注册
	async signup(ctx) {
		let data = [
			ctx.request.body.username,
			ctx.request.body.userpwd,
			Date.now()
		];

		let tmp1 = await sql.query(`select * from userInfo where username='${ctx.request.body.username}';`).then(function(result) {
			if(JSON.parse(JSON.stringify(result)).length > 0) {
				return 1;
			} else {
				return 0;
			}
		}, function(error) {
			return -1;
		});
		let res1 = {};
		if(tmp1 === 1) {
			res1 = {
				code: 500,
				message: '该用户名已存在'
			};
			ctx.body = res1;
			return;
		} else if(tmp1 === -1) {
			res1 = {
				code: 500,
				message: '服务器出错，请稍后再试'
			};
			ctx.body = res1;
			return;
		}
		let tmp = await sql.query("insert into userInfo set username=?,userpwd=?,createTime=?;", data).then(function(result) {
			let res = {
				code: 200,
				data: 1
			};
			return res;
		}, function(error) {
			return -1;
		});
		ctx.body = tmp;
	},
	//登录
	async login(ctx) {
		let data = [
			ctx.request.body.username,
			ctx.request.body.userpwd,
			Date.now()
		];

		let tmp1 = await sql.query(`select * from userInfo where username='${ctx.request.body.username}' and userpwd='${ctx.request.body.userpwd}';`).then(function(result) {
			if(JSON.parse(JSON.stringify(result)).length > 0) {
				return 1;
			} else {
				return 0;
			}
		}, function(error) {
			return -1;
		});
		let res1= {};
		if(tmp1 === 0) {
			res1 = {
				code: 500,
				message: '用户名或密码错误'
			};
		} else if(tmp1 === -1) {
			res1 = {
				code: 500,
				message: '服务器出错，请稍后再试'
			};
		} else {
			res1 = {
				code: 200,
				message: '登录成功'
			};
		}
		ctx.body = res1;
	},
	//用户列表
	async getUser(ctx) { 
		// 注意这里，因为是异步，所以要这样写才可以取到值。
		var tmp = await sql.query("select * from userInfo;").then(function(result) {
			res = {
				code: 200,
				data: JSON.parse(JSON.stringify(result))
			};
			return res;
		}, function(error) {
			return -1;
		});

		ctx.body = tmp;
	},

}