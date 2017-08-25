var fs = require('fs');

fs.unlink('results.txt',()=>{
	console.log( 'file unlinked' );
});
