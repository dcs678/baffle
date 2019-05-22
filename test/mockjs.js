/**
 * 共用部分
 */
var logger = require('../utils/log');
var utils = require('../utils/utils');
var request = JSON.parse(process.argv[2]),
	response = JSON.parse(process.argv[3]);
var excutor = utils.exc(process);
eval(excutor);


function mockjs(request, response) {
	var Mock = require('mockjs');
	var body = response.body.body;
	body.city = Mock.mock('@city');
	console.log(JSON.stringify(response));
}