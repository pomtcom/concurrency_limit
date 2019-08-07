function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

 const fs = require('fs');


 for (var i = 21972500; i < 22022500; i++) {
    for (var j = 0; j < 3; j++) {
        var stringToWrite = makeid(20)
        console.log(stringToWrite);
        // logger.write(i.toString());
        fs.appendFileSync('log_device_id.txt', stringToWrite + '\n');

    }
}