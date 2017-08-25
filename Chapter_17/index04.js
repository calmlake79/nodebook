app.post('/', function (req, res) {
	for( var i = 0 ; i < req.body.entry.length ; i++ ){
		for( var j = 0 ; j < req.body.entry[ i ].messaging.length ; j++ ){
			var messaging = req.body.entry[ i ].messaging[ j ];

			if( messaging.message && messaging.message.text ){
				console.log( messaging.sender.id );
				console.log( messaging.message.text );
			}
		}
	}

    res.send('OK!');
});
