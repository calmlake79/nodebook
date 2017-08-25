const crypto = require('crypto');
const cipher = crypto.createCipher('aes256', 'a password');

let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
