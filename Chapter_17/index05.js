const os = require('os');
const request = require('request');

const token = 'EAAGdBZAVHvA----';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable('x-powered-by');

app.get('/', function(req, res) {
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.challenge'] ) {
        res.status(200).send(req.query['hub.challenge']);
    }else{
        res.status(403).send("잘못된 경로");
    }
});

app.post('/', function (req, res) {
	for( var i = 0 ; i < req.body.entry.length ; i++ ){
		for( var j = 0 ; j < req.body.entry[ i ].messaging.length ; j++ ){
			var messaging = req.body.entry[ i ].messaging[ j ];
			
			if( messaging.message && messaging.message.text ){
				console.log( messaging.sender.id );
				console.log( messaging.message.text );

				Keyword( messaging.sender.id , messaging.message.text );
			}
		}
	}

    res.send('OK!');
});

var Keyword = ( sender_id , message )=>{
	var keyword_list = [{
		keyword:"안녕",
		text:"나도 안녕"
	},{
		keyword:"반가워",
		text:"나도 반가워"
	}];

	var sendText = "무슨말인지 잘 모르겠어";
	for( var i = 0 ; i < keyword_list.length ; i++ ){
		if( message.indexOf( keyword_list[ i ].keyword ) > -1 ){
			sendText = keyword_list[ i ].text;
			break;
		}
	}

	sendMessage( sender_id , sendText );
};

var sendMessage = ( sender_id , message )=>{
    var messageData = {
        recipient: {
            id: sender_id,
        },
        message: {
            text: message
        }
    };

    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: token },
        method: 'POST',
        json: messageData
    },(error, response, body)=>{
        if (!error && response.statusCode == 200) {
        	console.log("Send OK!");
        }else{
        	console.log("Error",body);
        }
    });
}

app.listen( process.env.PORT , function() {
	console.log("Node Started!");
});
