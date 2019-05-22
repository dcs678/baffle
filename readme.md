# 一、安装说明

### Mountebank安装
安装Nodejs
[Nodejs下载](https://nodejs.org/en/download/)
#### 或者
```
yum install -y nodejs
```
### 安装引用组件说明
```
npm install -g mountebank
npm install superagent --save
npm install log4js
npm install uuid --save
npm install moment
npm install node-schedule --save
npm install mysql -S
npm install cron
npm install mockjs
```

# 二、执行说明
```
进入mock目录
sh start.sh &
```
# 三、挡板目录结构
本次讲解的的挡板demo目录为baffle，他的目录结构如下：

|路径	|类型	|备注	|
|--	|--	|--	|
|baffle/logs	|目录	|日志文件目录，存放业务日志和定时任务日志	|
|baffle/quartz	|目录	|存放定时任务，为了实现挡板的回调功能包含log.js(quartz专用)、testquartz.js	|
|baffle/test	|目录	|存放挡板服务实现	|
|baffle/utils	|目录	|常用工具类，数据查询、日志输出等，包含db.js、log.js、utils.js	|
|baffle/imposters.ejs	|文件	|启动参数	文件|
|baffle/start.sh	|文件	|linux启动脚本，方便服务启动	|
|baffle/stop.sh	|文件	|linux停止脚本，方便服务停止	|
|baffle/startMac.sh	|文件|mac启动脚本，里面包含停止脚本|

--------------------------------------------------
License
(The baffle License)

Copyright (c) 2009-2010 dcs  <dcs_2000@126.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.