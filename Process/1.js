//console.log(process);
//argv是用来获取当前node程序的相关参数
//console.log(process.argv)
//if(process.argv.includes('-v')){
//	console.log("V1.0.0")
//}
//env获取系统环境信息
//console.log(process.env);
//if(process.env.mode=="dev"){
//	console.log("开发环境")
//}else{
//	console.log("生产环境")
//}
//exit退出当前进程
let i=0;
setInterval(()=>{
	i++;
	console.log(i);
	if(i>10){
		process.exit()
	}
},1000)


