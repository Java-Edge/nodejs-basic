var fs=require('fs');
//i/o操作    input/output  hello=>buffer=>数据流
//如果文件不存在的话，自动创建文件
//如果文件存在的话，覆盖掉之前内容
//如果路径目录不存在，则文件创建会失败
//如果node中可能会发生错误时，回调函数的第一个参数就是错误对象。
//fs.writeFile('./tt.txt','你好',(err)=>{
//	if(err){
//		console.log("错误")
//	}else{
//		console.log("成功")
//	}
//})
//追加写入内容
//fs.appendFile('./tt.txt','hello',(err)=>{
//	if(err){
//		console.log("错误")
//	}else{
//		console.log("成功")
//	}
//})
//读取文件内容
//var content=fs.readFileSync('./tt.txt');
//console.log(content);
//查询文件信息
//var info=fs.statSync('./tt.txt');
//console.log(info);
//删除
//fs.unlinkSync('./tt.txt');
