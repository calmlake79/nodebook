const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'a password');

const encrypted = '6b8f36b4e47211e842e897e323fb8fed589d804eff73289c18e2134e56f310ef';

let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
