const http = require('http');

const server = http.createServer((req, res) => {

	console.log( req.url );
	console.log( req.method );

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});


server.listen( 80 , (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
