const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

const server = http.createServer((req, res) => {
	var output = fs.readFileSync('About this Documentation _ Node.js v6.9.1 Documentation.htm', 'utf8');

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	var acceptEncoding = req.headers["accept-encoding"];
	if (!acceptEncoding) {
		acceptEncoding = '';
	}

	if( acceptEncoding.indexOf("deflate") > -1 ){
		zlib.deflate( output, (err, buffer) => {
			if( err ){
				res.end( output );
				return;
			}
			res.setHeader('Content-Encoding', 'deflate');
			res.end( buffer );
		});
	}else if( acceptEncoding.indexOf("gzip") > -1 ){
		zlib.gzip( output, (err, buffer) => {
			if( err ){
				res.end( output );
				return;
			}
			res.setHeader('Content-Encoding', 'gzip');
			res.end( buffer );
		});
	}else{
		res.end( output );
	}
});

server.listen( 80 , (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
