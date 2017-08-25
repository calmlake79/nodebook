var fs = require('fs');

// 디렉토리내의 파일 목록을 읽어옵니다.
fs.readdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}
	// 파일목록을 출력합니다.
	console.log( files );
});
