/*
 
 * 在node中，tcp是基于net模块实现的
 * 
 * */

var net =require('net');
var fs=require('fs')
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
	console.log("已连接，我是server2")
	var img =fs.readFileSync('./server/1.jpg');
	//console.log(img)
	
	socket.write(img);
	socket.end()
});




server.listen(8080,'localhost');
