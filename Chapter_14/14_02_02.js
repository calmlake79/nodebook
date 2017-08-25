var Url_data = url.parse( req.url );
var pathname = Url_data.pathname;
var query = qs.parse( Url_data.query );

if( req.method == 'GET' ){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("현재 GET Method 페이지의 pathname 은 "+pathname+" 이며 query 는 "+JSON.stringify(query)+"입니다.");
	return;
}

res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello world');
