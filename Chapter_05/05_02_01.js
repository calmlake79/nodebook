var filesystem_var = require( 'fs' );

filesystem_var.unlink( '/tmp/hello',( err )=>{
  	if( err ){
        	 throw err;
        	return;
  	}
  	
  	console.log ( 'delete success' );
});
