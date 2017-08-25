var data = require('./data.js');

var ServerFunction = ()=>{
	data.main();

	console.log( data.list );
};

ServerFunction.createServer();
