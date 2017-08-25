for( var i = 0 ; i < 6 ; i++ ){
	pool.getConnection((err, connection)=>{
		if( err ){
			console.log("ERROR:",err );
			return;
		}

		connection.query( 'SELECT something FROM sometable',(err, rows)=>{
			// 뭔가 데이터를 이용한 이러 저러한 작업들..
			console.log( new Date() );

			setTimeout(()=>{
				connection.release();
			},3000);

			// 현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업이 불가능.
		});
	});
}
