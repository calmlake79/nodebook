connection.query( 'UPDATE test set col1 = "table2" WHERE col1 = "table"', (err, result)=>{
	connection.release();

	if (err){
		console.error( err );
		return;
	};

	console.log('result: ' , result );
});
