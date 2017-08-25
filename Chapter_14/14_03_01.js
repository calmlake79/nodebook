const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {

	var Url_data = url.parse( req.url );
	var pathname = Url_data.pathname;

	var url_pathname = url.parse( req.url ).pathname;
	var url_route = url_pathname.split("/");
	if( url_route.length < 2 || url_pathname == '/' ){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('index');
		return;
	}

	var statusCode = 200;
	var Header = {
		'Content-Type': 'text/plain; charset=utf-8'
	};

	var output = "";

	switch( url_route[ 1 ] ){
		case 'board':
			var userId = url_route[ 2 ];
			var boardName = url_route[ 3 ];
			output = "사용자명은 "+userId+"이며 , 게시판명은 "+boardName+" 입니다.";
		break;
		default:
			statusCode = 404;
			output = "404 File Not Found";
	}

	res.writeHead( statusCode , Header );
	res.end( output );
});

server.listen( 80 , (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
