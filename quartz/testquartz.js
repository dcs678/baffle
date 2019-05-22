var logger = require('./log');
const cron = require('cron');
var db = require('../utils/db');
var utils = require('../utils/utils');
/**
 * 定时任务
 */
// https://www.npmjs.com/package/cron
const CronJob = cron.CronJob;

// CREATE TABLE `prduct` (
//   `id` int(255) NOT NULL AUTO_INCREMENT,
//   `context` varchar(1000) NOT NULL,
//   `flag` smallint(255) NOT NULL DEFAULT '0',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
// 
const prductParam = {
    // cronTime: '*/10 * * * * *',
	//
	cronTime: '0 */5 * * * *',
    onTick: function() {
			db.query('SELECT * from prduct where flag=0', [], function(ret){
			if(ret.length>0){
				for(var row in ret){
					var formData=ret[row].context;
					var parm=[];
					parm.push(ret[row].id);
					var callRet = utils.call(utils.testUrl.prod.url, formData, function(results) {
						logger.info("callRet=" + JSON.stringify(results));
						// console.log(results);
						db.query("update prduct set flag='1' where flag=0 and id=?", parm, function(err, retu){
								logger.info("产品状态变更完成:"+parm);
								console.log(err);
						});
					});
				}
			}else{
				logger.info("没有对应的产品");
				console.log("没有对应的产品");
			}
		});
    }
};
// 产品定时推送接口
const prductJob = new CronJob(prductParam);
prductJob.start();