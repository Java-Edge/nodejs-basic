/*http://www.baidu.com
 
 * 1.用户会通过浏览器发送一个http请求到指定的主机
 * 2.主机接收到数据以后，进行分析处理
 * 3.处理完以后，返回对应的数据到浏览器
 * 4.浏览器接收到主机返回的数据，然后进行处理。
 * 
 * 
 * 客户端   服务端
 * 
 * 使用http模块搭建一个用于处理http请求的服务器
 * 
 * */

var http=require('http');
var server=http.createServer();

server.on('listening',function(){
	console.log("开启成功")
})

server.on('request',function(req,res){
	console.log("监听到了http请求");
	//console.log(req);
	//request:
	//1.httpVersion:http协议的版本
	//2.headers：请求头中的数据
	//3.url：请求的地址
	//4.method:请求方式
	console.log(res);
	//response：
	//write：发送一个数据块到相应正文当中
	//end：最后调用
	res.setHeader('ria','tang')
	res.writeHead(200,"hello",{
		'content-type':'text/plain'
	});
	//res.write();
	res.end('<h1>hello<h1>');
	
})

server.listen(8088,'localhost');


//console.log(server.address());
