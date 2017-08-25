const url = require('url');
const querystring = require('querystring');

var url_str = "http://user:pass@host.com:8080/p/a/t/h?query=string&key=value#hash";

var Parse_url = url.parse( url_str );
console.log( Parse_url );

var Query = querystring.parse( Parse_url.query );
console.log( Query );
