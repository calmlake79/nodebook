var fs = require('fs');

fs.rename('oldname.png','newname.png',function(){
	console.log( 'file renamed' );
});
