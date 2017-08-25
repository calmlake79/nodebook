var idx = 0;
var CallbackProcess = ()=>{
	if( idx < Func_list.length ){
		Func_list[ idx ]();
		idx++;
	}else{
		console.log("Process Ended");
	}
};

var Func_list = [
	()=>{
		setTimeout(()=>{
			console.log("List1");
			CallbackProcess();
		},1000);
	},
	()=>{
		setTimeout(()=>{
			console.log("List2");
			CallbackProcess();
		},1000);
	},
	()=>{
		setTimeout(()=>{
			console.log("List3");
			CallbackProcess();
		},1000);
	},
	()=>{
		setTimeout(()=>{
			console.log("List4");
			CallbackProcess();
		},1000);
	},
	()=>{
		setTimeout(()=>{
			console.log("List5");
			CallbackProcess();
		},1000);
	}
];

var main = ()=>{
	CallbackProcess();
};

main();
