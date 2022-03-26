target=root@$server:/home/nightmare/apache-tomcat/webapps/speedshare
rsync -rv ./* $target
#  ffmpeg -f avfoundation -pixel_format uyvy422 -i "1" -f flv rtmp://localhost:1932/live/room1