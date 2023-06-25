/*
 
 * 在node中，tcp是基于net模块实现的
 * 
 * */

var net =require('net');
/*
 
 * net.Server类
 * 
 * 
 * 
 * */

//var server=new net.Server();
var server=net.createServer();

/*
 * function createServer（callback）{
 * 	let s=new net.Server()
 *  s.on('connection',callback)
 *  return s;
 * }
 * */
server.on('connection',socket=>{
	console.log("已连接")
	
	socket.on('data',data=>{
		console.log(data.toString());
		
		socket.write('我已接收到数据')
	})
	
});




server.listen(8088,'localhost');
