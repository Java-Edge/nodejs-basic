var fs =require('fs');
//不能删除一个非空文件
//fs.rmdirSync('./tt');


//let dirPath='./tt'
//let files=fs.readdirSync(dirPath);
//console.log(files);
//files.forEach(child=>{
//	fs.unlinkSync(dirPath+'/'+child)//./tt/1.json
//});
//fs.rmdirSync(dirPath);

rmdir('./tt');

function rmdir(dirPath){
	let files=fs.readdirSync(dirPath);
	files.forEach(child=>{
		let childPath=dirPath+'/'+child;
		if(fs.statSync(childPath).isDirectory()){
			rmdir(childPath);
		}else{
			fs.unlinkSync(childPath)
		}
	});
	fs.rmdirSync(dirPath);
}
