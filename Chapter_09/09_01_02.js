var session_cookie_list = [];
const server = http.createServer((req, res) => {
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

	var expire_time = new Date().getTime()+1000*86400;
	if( !session_cookie || !session_cookie_list[ session_cookie ] ){
		session_cookie = SessionStr();
		session_cookie_list[ session_cookie ] = {
			session_data: {},
			expire: expire_time
		};

		res.setHeader('Set-Cookie', 'sessions='+session_cookie+'; Expires='+new Date( expire_time ).toUTCString()+"; HttpOnly;");
	}else{
		session_cookie_list[ session_cookie ].expire = expire_time;
		res.setHeader('Set-Cookie', 'sessions='+session_cookie+'; Expires='+new Date( expire_time ).toUTCString()+"; HttpOnly;");
	}

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});
