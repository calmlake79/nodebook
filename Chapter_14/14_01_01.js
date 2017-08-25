const url = require('url');

var url_str = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

console.log( url.parse( url_str ) );
