process.env.TZ = 'Asia/Seoul';

console.log( "\033[36m"+new Date()+"\033[0m: Node Version: [ "+process.version+" ]" );
console.log( "\033[36m"+new Date()+"\033[0m: ["+__filename+"] Started." );

Object.defineProperty(global, '__stack', {
   get:()=>{
       var orig = Error.prepareStackTrace;
       Error.prepareStackTrace =(_, stack)=>{ return stack; };
       var err = new Error;
       Error.captureStackTrace(err, arguments.callee);
       var stack = err.stack;
       Error.prepareStackTrace = orig;
       return stack;
   }
});

Object.defineProperty(global, '__line', {
   get:()=>{
       return __stack[1].getLineNumber();
   }
});

var fs = require('fs');

// 로깅 모듈
global.Logger = ( log )=>{
	var getDateStr = ()=>{
		return new Date().getFullYear()+"_"+("0"+(1+new Date().getMonth())).slice(-2)+"_"+("0"+new Date().getDate()).slice(-2);
	};

   var stack = ( new Error() ).stack.toString().split("\n")[ 2 ].split(" ").pop().split(":");

   var str = new Date()+": ["+stack[ 0 ].substr(1)+"] Line: "+stack[ 1 ];

   if( log ){
       str += " "+ JSON.stringify( log );
   }

   var k = __filename.split("/");
   k.pop();

   var str_dsp = "\u001b[36m"+new Date()+"\u001b[0m: ["+stack[ 0 ].substr(1)+"] Line: "+stack[ 1 ];
   if( log ){
       str_dsp += " "+ JSON.stringify( log , null , "\t" );

       str_dsp = str_dsp.replace("\"type\": \"init\"" , "\"type\": \u001b[33m\"init\"\u001b[0m" );
       str_dsp = str_dsp.replace("\"type\": \"error\"" , "\"type\": \u001b[101m\"error\"\u001b[0m" );

   }

   console.log( str_dsp );

   fs.appendFile( k.join("/")+'/'+getDateStr()+".log", str+"\r\n" , (err)=>{
       if( err ){
           console.log( str );
       }
   });    
};

Logger({
	"type":"error",
	"text":"something error",
	"code":"code01"
});

console.log( __line , "Some Code" );
