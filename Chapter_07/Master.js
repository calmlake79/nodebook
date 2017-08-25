const cluster = require('cluster');
cluster.setupMaster({
	exec: 'worker.js',
});

var worker = cluster.fork();
worker.on('message',(msg)=>{
	console.log(msg);
});
