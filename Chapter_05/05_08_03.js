var https = require('https');

// 가져온 데이터를 담는 변수를 선언합니다.
var CrawlData = [];

var url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

// 해당 URL에서 데이터를 가져옵니다.
https.get( url + 'index.json',(res)=>{
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
				var link = str.slice( 1 , -1 ).replace(".html",".json");

				CrawlData.push({
					'title': title,
					'link':link,
					'methods': []
				});
			}
		}

		// 얻은 데이터를 화면에 출력합니다.
		setTimeout(()=>{
			GetMethod();
		}, 1000 );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});

// 해당 URL에서 데이터를 가져옵니다.
var page_idx = 0;
var GetMethod =()=>{
	console.log( "Get methods");
	https.get( url +  CrawlData[ page_idx ].link ,(res)=>{
		var body = '';
		res.on('data',(d)=>{
			body += d;
		});
		res.on('end',()=>{
			// 가져온 데이터를 JSON Object 형태로 변환하여 저장합니다.
			var temp = JSON.parse( body );

			// 메소드를 사용하기 힘든 데이터는 저장하지 않습니다.
			if( !temp || !temp.modules || temp.modules.length == 0 || !temp.modules[ 0 ].methods ){
				page_idx++;
				setTimeout(()=>{
					GetMethod();
				}, 1000 );
				return;
			}

			var index_data = temp.modules[ 0 ].methods;

			// 루프를 돌면서 메소드를 하나씩 확인합니다.
			for( var i = 0 ; i < index_data.length ; i++ ){
				// 개별 메소드들에 대해서 필요한 부분만큼의 데이터를 읽어서 저장합니다.
				CrawlData[ page_idx ].methods.push({
					textRaw: index_data[ i ].textRaw,
					desc: index_data[ i ].desc,
					signatures: index_data[ i ].signatures
				});
			}

			// 데이터를 불러오고 나면 다시 한번 호출한다.
			if( page_idx < CrawlData.length - 1 ){
				page_idx++;
				setTimeout(function(){
					GetMethod();
				}, 1000 );
			}else{
				// 화면으로 출력합니다.
				console.log( CrawlData );
			}
		});
	}).on('error',(e)=>{
		console.log( "Error:",e );
	});
};
