// 使用 Mock
var Mock = require('mockjs')

var request = JSON.parse(process.argv[2]),
	response = JSON.parse(process.argv[3]);


response.body = response.body.replace('${city}', Mock.mock('@city'));


console.log(JSON.stringify(response));
