handleOpen(( hd )=>{
	hd.handleProcess((err,result)=>{
		if( err ){
			console.error( err );
			handleClose( hd );
			return;
		}

		someProcess( result );
		handleClose( hd );
	});
});
