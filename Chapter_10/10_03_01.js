var SockServer = require('socket.io');
var io = new SockServer();

var chat = io
.of('/chat')
.on('connection', (socket)=>{
	console.log("connection");

	socket.on('msg',(data)=>{
		console.log("RECV MSG",data);

		setTimeout(()=>{
			socket.emit("msg","Send from Server1"+new Date());
			chat.emit("msg","Send from Server2"+new Date());
		},1000);
	})
	.on('disconnect',()=>{
		console.log("disconnect");
	});
});

io.listen(3000);
