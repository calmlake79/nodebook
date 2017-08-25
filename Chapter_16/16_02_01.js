router.get('/',(req, res, next)=>{
 console.log( "GET:" , req.body );
 res.status(200).send("GET");
});

router.post('/',(req, res, next)=>{
 console.log( "POST:" , req.body );
 res.status(200).send("POST");
});

router.put('/',(req, res, next)=>{
 console.log( "PUT:" , req.body );
 res.status(200).send("PUT");
});

router.delete('/',(req, res, next)=>{
 console.log( "DELETE:" , req.body );
 res.status(200).send("DELETE");
});
