const http = require('http');
const server = http.createServer((req, res) => {
	console.log( req.headers );

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('index');
});

server.listen( 80 , (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
