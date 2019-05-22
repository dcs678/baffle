mb stop
#---------------------------定时任务 start-----------------------------
ps -ef|grep testquartz |grep -v grep|cut -c 6-15|xargs kill -9
node quartz/testquartz.js &
#---------------------------定时任务 end-----------------------------

netstat -anvp tcp|grep 2525 |grep -v grep|cut -c 94-100 |xargs kill -9

mb start --configfile imposters.ejs  --allowInjection --localOnly &
