const qs = require('qs');

var obj = qs.parse('a=1&b=2');
console.log( JSON.stringify( obj ) );

var str = qs.stringify( obj );
console.log( str );

var str = qs.stringify( JSON.parse('{"a":"1","b":"2"}') );
console.log( str );
