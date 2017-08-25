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
		var raw_post_data = "";

		req.on('data',(chunk)=>{
			if( raw_post_data.length > 1000 * 1000 * 200 ){
				req.connection.destroy();
				return;
			}
			raw_post_data += chunk;
		})
		.on('end',()=>{
			if( req.headers['content-type'] && req.headers['content-type'].split(";")[ 0 ] == 'multipart/form-data' ){
				var boundary = req.headers['content-type'].split(";")[ 1 ].split("=")[ 1 ];

				var data_parts = raw_post_data.split( "--"+boundary );
				data_parts.shift();
				data_parts.pop();

				var post_data = {};
				var file_data = {};

				for( var i = 0 ; i < data_parts.length ; i++ ){
					var data_parts_str = data_parts[ i ];
					var item_value = {};

					var GetLine = ()=>{
						var str_pos = data_parts_str.indexOf("\r\n");
						var temp_str = data_parts_str.slice( 0 , str_pos );
						data_parts_str = data_parts_str.slice( str_pos + "\r\n".length );
						return temp_str;
					};

					GetLine();

					var content_disposition = GetLine();
					content_disposition = content_disposition.split(";").map((item)=>{
						var temp = item.trim().split("=");

						if( temp.length == 2 ){
							item_value[ temp[ 0 ] ] = temp[ 1 ].slice( 1 , -1 );
						}
					});

					if( item_value.filename ){
						item_value['Content-Type'] = GetLine().split(": ")[ 1 ];
						GetLine();
						item_value['data'] = data_parts_str.slice( 0 , -2 );

						file_data[ item_value['name'] ] = item_value;
						delete file_data[ item_value['name'] ].name;
					}else{
						GetLine();
						post_data[ item_value['name'] ] = GetLine();
					}
				}

				console.log( "post_data: ", post_data );
				console.log( "file_data: ", file_data );

				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end("현재 POST Method 페이지의 pathname 은 "+pathname+" 이며 query 는 "+JSON.stringify(post_data)+"입니다.");
			}else{
				var post_query = qs.parse( raw_post_data );

				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end("현재 POST Method 페이지의 pathname 은 "+pathname+" 이며 query 는 "+JSON.stringify(post_query)+"입니다.");
			}
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
