var https = require('https');

// 가져온 데이터를 담는 변수를 선언합니다.
var CrawlData = [ { title: 'File System', link: 'fs.json' , methods: [] } ];

var url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

// 해당 URL에서 데이터를 가져옵니다.
https.get( url +  CrawlData[ 0 ].link ,(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		// 가져온 데이터를 JSON Object 형태로 변환하여 저장합니다.
		var index_data = JSON.parse( body ).modules[ 0 ].methods;

		// 루프를 돌면서 메소드를 하나씩 확인합니다.
		for( var i = 0 ; i < index_data.length ; i++ ){
		// 개별 메소드들에 대해서 필요한 부분만큼의 데이터를 읽어서 저장합니다.
			CrawlData[ 0 ].methods.push({
				textRaw: index_data[ i ].textRaw,
				desc: index_data[ i ].desc,
				signatures: index_data[ i ].signatures
			});
		}

		// 화면으로 출력합니다.
		console.log( CrawlData );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
