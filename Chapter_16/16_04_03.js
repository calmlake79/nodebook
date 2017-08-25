var que_list = [];

app.route('/que/:que_name')
.put((req,res)=>{
	var que_name = req.params.que_name;

   if( que_list[ que_name ] ){
       que_list[ que_name ].push( req.body );
   }else{
       que_list[ que_name ] = [ req.body ];
   }

   res.json({
       result:'ok'
   });
})
.get((req,res)=>{
	var que_name = req.params.que_name;

	var result;
	if( que_list[ que_name ] ){
	   result = que_list[ que_name ].shift();
	}else{
	   result = null;
	}
});
