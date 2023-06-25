var fs =require('fs');
//监听文件
//fs.watchFile('./a',e=>{
//	console.log(e)
//})


fs.watch('./tt',(eventType,filename)=>{
	console.log(eventType,filename)
})
