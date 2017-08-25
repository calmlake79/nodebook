connection.query( 'SELECT col1 , col2 , col3 FROM mytable where col1 = ?' , [ 'val1' ], (err, rows , fields ) => {
	connection.release();
	if( err ){
		// 에러가 발생할 경우 에러를 표시하고, 종료를 한다.
		console.error( err );
		return;
	}

	// 받은 결과값의 필드 리스트를 보여준다.
	console.log( fields );

	// 결과물을 출력한다.
	for( var i = 0 ; i < rows.length ; i++ ){
		console.log( "Row: " , rows[ i ] );
	}
});
