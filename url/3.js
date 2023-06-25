var http=require('http');
var url=require('url');
var fs =require('fs')
var ps =require('querystring')

var server=http.createServer();




var HtmlDir=__dirname+'/html/';
server.on('listening',function(){
	console.log("开启成功")
});
//localhost:8088/a/b/c.html?a=1
server.on('request',function(req,res){
	
	var urlObj=url.parse(req.url);
	switch(urlObj.pathname){
		case'/':
		//首页
		setData(HtmlDir+'index.html',req,res);
		break;
		case'/user':
		//个人
		setData(HtmlDir+'user.html',req,res);
		break;
		case'/login':
		//登陆
		setData(HtmlDir+'login.html',req,res);
		break;
		case'/login/ps':
		//console.log(req.method);
		//console.log(urlObj);
		//console.log(ps.parse(urlObj.query))
		
		if(req.method.toUpperCase()=='POST'){
			var str='';
			req.on('data',function(chunk){
				str +=chunk
			});
			req.on('end',function(){
				console.log(ps.parse(str))
			})
		}
		
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
function setData(file,req,res){
	fs.readFile(file,function(err,data){
		if(err){
			res.writeHeader(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end('<h1>页面出错了<h1>')
		}else{
			res.writeHeader(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end(data)
		}
		
	})
}
server.listen(8088,'localhost');

