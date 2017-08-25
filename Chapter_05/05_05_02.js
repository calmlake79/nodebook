var qs = require('querystring');
var http = require('http');

var post_data = qs.stringify({
	'key1': 'val1',
	'key2': 'val2'
});

var post_options = {
	host: 'posttestserver.com',
	port: '80',
	path: '/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': post_data.length
	}
};

var post_req = http.request(post_options,(res)=>{
	res.setEncoding('utf8');
	res.on('data', (chunk)=>{
		console.log('Response: ' + chunk);
	});
});

post_req.write(post_data);
post_req.end();
