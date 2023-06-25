var http=require('http');
var url=require('url')
var server=http.createServer();

server.on('listening',function(){
	console.log("开启成功")
});
//localhost:8088/a/b/c.html?a=1
server.on('request',function(req,res){
	
	var urlObj=url.parse(req.url);
	switch(urlObj.pathname){
		case'/':
		//首页
		res.writeHeader(200,{
			'content-type':'text/html;charset=utf-8'
		});
		res.end('<h1>首页<h1>')
		break;
		case'/user':
		//个人
		res.writeHeader(200,{
			'content-type':'text/html;charset=utf-8'
		});
		res.end('<h1>个人<h1>')
		break;
	default:
		//找不到
		res.writeHeader(404,{
			'content-type':'text/html;charset=utf-8'
		});
		res.end('<h1>页面找不到了，亲<h1>')
		break;
	}
});

server.listen(8088,'localhost');

