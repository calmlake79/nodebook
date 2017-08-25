var fs = require('fs');

// test.txt파일을 쓸수 있게 핸들을 엽니다.
fs.open ('test.txt' , 'w' ,(err, fd )=>{
	// 실패시에는 err 를 리턴하며 성공시에는 fd라는 핸들을 리턴합니다.
	if( err ) throw err;
	
	// 파일에 쓰기를 수행합니다.
	fs.write( fd , "hello world" ,( err , written )=>{
		// 실패시에는 err 를 리턴하며, 성공시에는 쓰여진 바이트수를 리턴합니다.
		if( err ) throw err;
		console.log( written + " bytes Written");

		fs.close( fd ,()=>{
			console.log('Done');
		});
	});
});
