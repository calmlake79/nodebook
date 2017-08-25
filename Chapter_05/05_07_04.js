var fs = require('fs');

// tempdir 이라는 이름의 디렉토리를 생성합니다.
fs.mkdir('tempdir',( e )=>{
	if( e ){
		throw e;
	}
	// 생성후에는 메시지를 화면에 출력합니다.
	console.log( 'Created!', e);
});
