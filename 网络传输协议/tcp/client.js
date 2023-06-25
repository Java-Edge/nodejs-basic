var net =require('net');
var fs=require('fs')
/*
 
 * 创建客户端与udp不同
 * 需要建立连接
 * 
 * */

//通过net.createConnection（）连接目标主机的地址及端口号
var clientSocket=net.createConnection(8080,'localhost');

//clientSocket.write('hello boy');

	var len=0;
	var arr=[];
clientSocket.on('data',data=>{
	//console.log(data.toString())
	//console.log(data)
	len+=data.length;
	//console.log(len);
	arr.push(data);
	//console.log(arr);
});
clientSocket.on('end',()=>{
	//console.log("数据传送完毕");
	var bf=Buffer.concat(arr,len);
	//console.log(bf)
	fs.writeFileSync('./client/1.jpg',bf})
	
})
