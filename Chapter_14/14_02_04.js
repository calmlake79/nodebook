const url = require('url');
const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {

	var Url_data = url.parse( req.url );
	var pathname = Url_data.pathname;
	var query = qs.parse( Url_data.query );

	if( req.method == 'GET' ){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end("현재 GET Method 페이지의 pathname 은 "+pathname+" 이며 query 는 "+JSON.stringify(query)+"입니다.");
	}else if( req.method == 'POST' ){
		var post_data = "";

		req.on('data',(chunk)=>{
			post_data += chunk;
		})
		.on('end',()=>{
			var post_query = qs.parse( post_data );

			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end("현재 POST Method 페이지의 pathname 은 "+pathname+" 이며 query 는 "+JSON.stringify(post_query)+"입니다.");
		});
	}else{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Unknown Method');
	}
});

server.listen( 80 , (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
