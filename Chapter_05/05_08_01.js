var https = require('https');

// 가져온 데이터를 담는 변수를 선언합니다.
var CrawlData = [];

// 해당 URL에서 데이터를 가져옵니다.
https.get('https://nodejs.org/dist/latest-v5.x/docs/api/index.json',(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		// 가져온 데이터를 JSON Object 형태로 변환하여 저장합니다.
		var index_data = JSON.parse( body ).desc;

		// 루프를 돌면서 페이지 데이터를 가져옵니다.
		for( var i = 0 ; i < index_data.length ; i++ ){
// 해당 데이터의 type 이 text 일 경우에만 데이터를 분석합니다.
			if( index_data[ i ].type == 'text' ){
				/*
사실 이부분은 정규표현식을 이용하면 좀더 편리하게 되는 부분입니다.
하지만, 이번장에서는 그냥 진행하도록 하겠습니다.
앞 부분의 코드들은 [] 사이의 내용을 title 로 뽑는 부분이며,
뒷 부분의 코드들은 () 사이의 내용을 link 로 뽑는 부분입니다.
뽑은 코드는 배열형태로 CrawlData 에 넣게 됩니다.
				*/

				var str = index_data[ i ].text;
				str = str.substr( str.indexOf("[") + 1 );
				var temp_idx = str.indexOf("]");
				var title = str.substr( 0 , temp_idx );

				str = str.substr( temp_idx + 1 );
				var link = str.slice( 1 , -1 );

				CrawlData.push({
					'title': title,
					'link':link
				});
			}
		}

		// 얻은 데이터를 화면에 출력합니다.
		console.log( CrawlData );

	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
