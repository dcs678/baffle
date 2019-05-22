mb stop
#---------------------------定时任务 start-----------------------------
ps -ef|grep testquartz |grep -v grep|cut -c 9-15|xargs kill -9
#---------------------------定时任务 end-----------------------------
netstat -antp|grep 2525 |grep -v grep|cut -c 80-85|xargs kill -9