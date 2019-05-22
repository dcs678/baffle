var logger = require('./log');
var moment = require('moment');
moment.locale('zh-cn');


function exc(process) {
	var request = JSON.parse(process.argv[2]),
		response = JSON.parse(process.argv[3]);
	var method = request.path.slice(1).replace(new RegExp("/","gm"), "_");
	var excutor = method + '(request,response)';
	logger.info(excutor);
	return excutor;
}

function httpPost(url, formData,callback) {
	var superagent = require('superagent');
	superagent
		.post(url)
		.send(formData)
		.set('header_key', 'header_value')
		.set('Content-Type', 'application/json')
		.end(function(err, res) {
			if (err) {
				logger.info(err);
				 callback && callback("");
				 // return "";
			} else {
				var retData = JSON.parse(res.text)
				 callback && callback(retData);
				// return retData
			}
		})
}

/**
 * 默认的函数
 * @param {Object} request
 * @param {Object} response
 */
function defaults(request, response) {
	
	console.log(JSON.stringify(response));
	var reqData = request.body;
	var reqJson = JSON.parse(reqData);
	logger.info(reqJson);
}
/**
 * 回调地址
 */
var testUrl = {
	prod: {
		url: '/openapi/prodList',
		description: '产品列表'
	}
};

function getUuid() {
	// 声明变量 
	var Mock = require('mockjs');
	return Mock.mock('@guid');
}

function getDateYYYYMMDD() {
	return moment().format('YYYY-MM-DD'); /*现在的时间*/
}

function getDateYYYYMMDDHHMMSS() {
	return moment().format('YYYY-MM-DD HH:mm:ss'); /*格式化时间*/
}

function formatDate(val) {
	return moment(val).format('YYYY-MM-DD HH:mm:ss'); /*格式化时间*/
}

function subDay(val) {
	var _today = moment();
	return _today.subtract(val, 'days').format('YYYY-MM-DD'); /*前一天的时间*/
}

function addDay(val) {
	var _today = moment();
	return _today.add(val, 'days').format('YYYY-MM-DD'); /*明天天的时间*/
}

/**
 * @param {Object} url
 * @param {Object} formdata
 * 调用其他项目的接口
 */
function call(url, formdata, callback) {
	logger.info(url);
	logger.info(formdata);
	var postUrl = "http://localhost:8082" + url;
	logger.info("postUrl=" + postUrl);
	httpPost(postUrl, formdata, callback);
}

module.exports = {
	exc,
	httpPost,
	defaults,
	testUrl,
	getUuid,
	getDateYYYYMMDD,
	getDateYYYYMMDDHHMMSS,
	formatDate,
	subDay,
	addDay,
	call
}
