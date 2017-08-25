const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
	var numReqs = 0;
	setInterval(() => {
		console.log('numReqs =', numReqs);
	}, 1000);

	var messageHandler = (msg) => {
		if (msg.cmd && msg.cmd == 'notifyRequest') {
			console.log("Noti!");
			numReqs += 1;
		}
	}

	const numCPUs = require('os').cpus().length;
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
		console.log("New Fork!");
	}

	Object.keys(cluster.workers).forEach((id) => {
		cluster.workers[id].on('message', messageHandler);
	});
}else{
	http.Server((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');

		process.send({ cmd: 'notifyRequest' });
	}).listen(8000);
}
