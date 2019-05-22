mb stop
#---------------------------定时任务 start-----------------------------
ps -ef|grep testquartz |grep -v grep|cut -c 9-15|xargs kill -9
node quartz/testquartz.js &
#---------------------------定时任务 end-----------------------------

mb start --configfile imposters.ejs  --allowInjection >test.out 2>&1 &
