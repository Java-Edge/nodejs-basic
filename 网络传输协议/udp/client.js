var dgram=require('dgram');

var clientSocket=dgram.createSocket('udp4');


//发送数据
//无需建立连接，不需要连接到服务器然后再发送数据

clientSocket.send('hello',8088,'localhost');
