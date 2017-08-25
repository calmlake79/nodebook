var session_cookie;
if( req.headers.cookie ){
	var cookies = req.headers.cookie.split(";").map((obj)=>{
		var temp = obj.trim().split("=");
		if( temp[ 0 ] == 'sessions' ){
			session_cookie = temp[ 1 ];
		}
		return obj.trim().split("=");
	});
}
