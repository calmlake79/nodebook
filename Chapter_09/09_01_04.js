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
