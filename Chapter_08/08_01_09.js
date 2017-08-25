connection.query('DELETE FROM posts WHERE title = "wrong"', (err, result)=>{
	if (err){
		console.error( err );
		return;
	};

	console.log('result: ' , result );
})
