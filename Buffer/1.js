//位0/1
//字节=8位




//let b1=new Buffer(5);
//console.log(b1);
//b1[0]=1;
//console.log(b1);
//b1[0]="唐";
//console.log(b1);
//let b2=new Buffer('tang');
//console.log(b2);
//let b3=new Buffer("你好")
//console.log(b3);
//console.log('tang'.length,"你好".length,b2.length,b3.length)
//let b4=new Buffer(10);
//console.log(b4);
//b4.fill(12,2,4);
//b4[5]=13;
//
//console.log(b4);

let b5=new Buffer('tang');
let b6=new Buffer('tang');
//console.log(b5,b6);
//console.log(b6==b5);
//let a=[1,2,3];
//let b=[1,2,3];
//console.log(a==b);
console.log(b5.equals(b6));