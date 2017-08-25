var fs = require('fs');

fs.stat('tempnewname.png',(err, stats)=>{
	if( err ){
		console.log( err );
		return;
	}
	console.log( stats );
});
