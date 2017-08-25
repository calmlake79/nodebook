const sheets = google.sheets("v4");

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

    console.log( body.spreadsheetId );
    console.log( body.spreadsheetUrl );
});
