# 系统调试利器-挡板实战


## 什么是挡板
   + 当今是多服务多协作的时代，任何系统不再是孤岛，而是相互依赖。
   + 由于存在多系统间环境稳定难、数据准备难、并行开发难问题，造成多系统间联调测试需要大量的沟通成本、排查成本，为了解决让人头疼的问题，引出了挡板的概念。
   + 其实挡板测试主要是为了模拟外围的系统、服务、接口而开发的mock。
   + 如电商系统调用第三方支付系统进行订单的付款、充值等场景，在双方遵循接口协议的同时，不管开发联调、功能测试还是性能测试都能够使技术人员专注自己的功能实现。
   + 一句话为了减少外围系统的影响，在接口协议的框架下专注自己的功能，减少扯犊子。

## 解决问题
+ 挡板解决不稳定的问题：Mock服务非常简单，业务逻辑简单甚至没有，所以它足够稳定。
+ 快速构造复杂数据：通过自定义返回结果，可以构造非常复杂的数据，不需要第三方给我们准备数据，既可以做业务验证。
+ 快速构造异常场景：对于一些异常的情况，比如网络延迟高、重试机制、特殊异常返回都可以用挡板来构造。


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


**经过周末两天的的努力，今天晚上加班努力了一下，终于赶出来了，记录下当前时间2019-05-22 01:29:53，文中不当之处请不吝指出，不胜感激！
我会继续努力推出更好的技术文档，以梦为马不负韶华！**

**不知读到结尾的您都学会了吗？ 用mountebank来做挡板其实很简单，但必须多实践才能更好的掌握其精髓，更好的进行适合自己业务的扩展。**

同时欢迎大家访问的我的[博客](https://me.csdn.net/weixin_42231253)，前几年确实写了不少东西，都是躺在家里睡大觉，随着时间的流失，没有了价值，还不如拿出来分享一下，哪怕是抱砖引玉也好，这样也算是对得起自己的青春！
--------------------------------------------------
License
(The baffle License)

Copyright (c) 2009-2010 dcs  <dcs_2000@126.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
