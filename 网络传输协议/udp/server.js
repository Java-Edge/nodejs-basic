/*网络传输协议
 * 
 * tcp：这是一个面向连接的协议，传输数据可靠，效率低。
 * 
 * 
 * udp：无连接服务。传输数据不可靠，效率高。
 * dgram模块
 * */

var dgram=require('dgram');

/*创建一个socket类，socket用来处理网络数据的api对象
 * 通过socket，我们就可以对网络数据进行读取和输出
 * 
 * */
//两种方式创建
//var serverSocket=new dgram.Socket();
var serverSocket=dgram.createSocket('udp4');//udp4=>ipv4



//接收数据时触发
serverSocket.on('message',data=>{
	console.log(data.toString())
})

//监听8088

serverSocket.bind(8088,'localhost');
console.log("服务器开启");