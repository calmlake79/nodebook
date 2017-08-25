var function_name = new Func();
function_name
.on('event1',()=>{
	callback_process1();
})
.on('event2',()=>{
	callback_process2();
});

function_name.startServer();
