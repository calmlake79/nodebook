var user = require('./user.js');
var board = require('./board.js');

var ServerFunction = ()=>{
	if( condition == 'user' ){
		user.main();
	}else if( condition == 'board' ){
		board.main();
	}
};

ServerFunction.createServer();
