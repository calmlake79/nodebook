const drive = google.drive("v3");

drive.permissions.create({
    auth: authClient,
    fileId: spreadsheetId,
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
