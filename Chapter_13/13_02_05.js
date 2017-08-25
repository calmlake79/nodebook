var main = ()=>{
	for( var i = 0 ; i < 10 ; i++ ){
		Crawling();
	}
};

var Crawling = ()=>{
	setTimeout(()=>{
		console.log("Get Page");
		GetPage();
	},1000);
};

var page = 0;
var GetPage = ()=>{
	console.log("Page Process: %d",page);
	page++;
	if( page == 10 ){
		console.log("Process Ended");
	}	
};

main();
