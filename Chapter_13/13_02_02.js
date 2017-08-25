var func = ()=>{
	console.log("process 1");
	setTimeout(()=>{
		console.log("process 2");
		setTimeout(()=>{
			console.log("process ended");
		},1000);
	},1000);
};

func();
