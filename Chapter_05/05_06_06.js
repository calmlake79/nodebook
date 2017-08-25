var fs = require('fs');
// 기록할 문자열을 생성합니다.
var str = [];
for( var j = 0 ; j < 1000000 ; j++ ){
	str += "0123456789";
}
// 파일을 쓸 핸들을 엽니다.
var writeopen = fs.createWriteStream('results2.txt', {flags: 'w'});
writeopen.on('open',( data )=>{
	console.log( "open:",data );


	setTimeout(()=>{
		console.log( "Start");
		// 루프를 돌면서 실제로 파일을 씁니다.
		for( var i = 0 ; i < 100 ; i++ ){
			writeopen.write( str );
		}
		console.log( "End");
	},0);

	setTimeout(()=>{
		// 타이머에 의해 화면에 Test2 를 출력합니다.
		console.log( "Test2" );
	},10);

	// 화면에 Test1을 출력합니다.
	console.log("Test1");

	setTimeout(()=>{
		writeopen.end(()=>{
			//파일을 닫습니다.
			console.log("File Close");
		});
	},10000);
});
