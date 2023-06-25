//console.log("hello");
//输出
//process.stdout.write("hello");
var fs=require('fs');
process.stdout.write("请输入文件名");
process.stdin.on('data',(e)=>{
	fs.mkdirSync(e.toString().replace('\r\n',''));
	process.stdout.write("创建成功");
});
