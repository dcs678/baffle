var logger = require('./log');
var mysql = require('mysql');

/**
 * @param {Object} sql
 * @param {Object} arr
 * @param {Object} callback
 * 执行sql
 */
exports.query = function(sql, arr, callback) {
	var connection=getConnection();
	//查
	connection.query(sql,arr, function(err, result) {
		if (err) {
			logger.info('[SELECT ERROR] - ', err.message);
			return;
		}

		 callback && callback(result);
	});
	connection.end();
};
/**
 * 获取连接
 */
function getConnection(){
	var connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '123456',
		database: 'test_mock'
	});
	connection.connect();
	return connection;
}