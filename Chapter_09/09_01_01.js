const http = require('http');

var SessionStr = ()=>{
	var str = "";
	var base_str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for( var i = 0 ; i < 64 ; i++ ){
		str += base_str[ Math.floor( Math.random()*base_str.length ) ];
	}
	return str;
}

const server = http.createServer((req, res) => {

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	var session_cookie = SessionStr();
	res.setHeader('Set-Cookie',
		['sessions='+session_cookie+'; Expires='+new Date(new Date().getTime()+1000*86400).toUTCString()+"; HttpOnly;",
		'cookie=test2; Expires='+new Date(new Date().getTime()+1000*86400).toUTCString()+";"]
	);

	res.end('Hello World\n');
});

server.listen(80, (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
