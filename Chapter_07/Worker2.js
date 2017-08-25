setInterval(()=>{
	process.send('worker');
},1000);

setTimeout(()=>{
	error_function();
},5000);
