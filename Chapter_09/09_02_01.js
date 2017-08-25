const crypto = require('crypto');

let result = crypto.createHash('sha256').update('some data to hash').digest('hex');

console.log( result );
