var func = ()=>{
	console.log("process 1");
	func2();
};

var func2 = ()=>{
	setTimeout(()=>{
		console.log("process 2");
		func3();
	},1000);
};

var func3 = ()=>{
	setTimeout(()=>{
		console.log("process ended");
	},1000);
};

func();
