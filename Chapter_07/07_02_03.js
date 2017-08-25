const cluster = require('cluster');
cluster.setupMaster({
	exec: 'worker.js',
	args: ['--use', 'https'],
});
cluster.fork(); // https worker
cluster.setupMaster({
	exec: 'worker.js',
	args: ['--use', 'http']
});
cluster.fork(); // http worker
