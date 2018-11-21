const Client = require("mysql-pro");
const client = new Client({
	mysql: {
		user: 'root',
		password: 'qwe123123',
		database: 'test2',
		host: '127.0.0.1',
	}
});

module.exports = client;