// 파일 모듈을 선언합니다.
var fs = require('fs');
// data.txt 라는 파일을 쓰기 위한 핸들을 엽니다.
var fd = fs.createWriteStream('data.txt',{flags: 'w'});

// 파일 핸들이 생성되면 콜백을 반환합니다.
fd.on('open',()=>{
	// 파일을 연뒤, Data 라고 기록을 합니다.
	fd.write("Data");

	// 파일을 닫습니다.
	fd.end(()=>{
		// 파일을 닫은뒤 END 를 화면에 출력합니다.
		console.log("END");
	});
});
