var fs=require('fs');
//node nodecli app -i
//node指令
//nodecli脚本
//APP项目名
//-i选项index.html
//console.log(process.argv[2]);
let appName=process.argv[2];
let appPath=__dirname+'/'+appName;



if(fs.existsSync(appPath)){
	console.log("目录已存在");
	process.exit();
}
fs.mkdirSync(appPath);
fs.mkdirSync(appPath+'/css');
fs.mkdirSync(appPath+'/js');
fs.mkdirSync(appPath+'/view');

if(process.argv.includes("-i")){
	fs.writeFileSync(appPath+'/index.html',`<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
	</body>
</html>`)
	
}


console.log("项目创建完成")