let list = [1,2,3];

module.exports = ()=>{
		for( let i = 0 ; i < list.length ; i++ ){
			list[ i ] *= 2;
		}
		return list;
};

module.exports.test = ()=>{
	console.log( "test" );
};
