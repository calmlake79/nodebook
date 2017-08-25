const google = require('googleapis');
const drive = google.drive("v3");
const sheets = google.sheets("v4");

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

    create();
});

var create = ()=>{
    sheets.spreadsheets.create({
        "auth": authClient,
        "resource":{
            "properties": {
                "title": "테스트 스프레드 시트 파일",
                "locale": "ko_KR",
                "timeZone": "Asia/Seoul",
            },
            "sheets":[{
                "properties":{
                    "title":"시트 넘버1"
                },
                "data":[{
                    "startRow":2,
                    "startColumn":5,
                    "rowData":[{
                        "values":[
	                        {
	                            "userEnteredValue": {
	                                "stringValue": "셀1-1"
	                            }
	                        },
	                        {
	                            "userEnteredValue": {
	                                "stringValue": "셀1-2"
	                            }
	                        }
                        ]
                    }]
                }]
            },{
                "properties":{
                    "title":"시트 넘버2"
                }
            }]
        }
    },(err,body)=>{
        if(err){
            throw err;
        }

        var spreadsheetId = body.spreadsheetId;

        perm( spreadsheetId );

        console.log( body.spreadsheetId );
        console.log( body.spreadsheetUrl );
    });
};

var perm = ( fileId )=>{
    drive.permissions.create({
        auth: authClient,
        fileId: fileId,
        resource:{
            role:"writer",
            type:"anyone"
        }
    },(err, body)=>{
        if (err) {
            throw err;
        }

        console.log('Function details:');
        console.log( JSON.stringify( body , null , "   " ));
    });
};
