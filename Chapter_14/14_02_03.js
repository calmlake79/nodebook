if( req.method == 'POST' ){
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
}
