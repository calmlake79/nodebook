var fs = require('fs');

fs.unlink('/tmp/hello',( err )=>{
	if( err ) throw err;
	console.log("successfully deleted /tmp/hello" );
});
