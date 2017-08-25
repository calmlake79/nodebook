var http = require('http');

http.get('http://google.co.kr/',(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		console.log( "DATA: " , body );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
