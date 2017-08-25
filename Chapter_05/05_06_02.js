var fs = require('fs');

fs.writeFile('test.txt', 'Hello World2',(err)=> {
	if(err) throw err;
	console.log('File write completed');
});
