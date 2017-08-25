var func = ()=>{
	console.log("process 1");
	func2();
};

var func2_count = 0;
var func2 = ()=>{
	if( func2_count == 10 ){
		func3();
		return;
	}
	func2_count++;

	setTimeout(()=>{
		console.log('process %d', func2_count );
		func2();
	},1000);
};

var func3 = ()=>{
	setTimeout(()=>{
		console.log("process ended");
	},1000);
};

func();
