app.post('/', function (req, res) {
    console.log("MESSAGE RESPONSE");
    console.log( JSON.stringify( req.body , null , "    " ) );

    res.send('OK!');
});
