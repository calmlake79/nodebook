const google = require('googleapis');

const scopes = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/spreadsheets'
];

const key = require('./sheetid.json');
const authClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    scopes,
    null
);

authClient.authorize((err, tokens)=>{
    if (err) {
        console.log(err);
        return;
    }

   	console.log( tokens );
});
