// var fs = require('fs')
// var logger = fs.createWriteStream('log.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
// })

// logger.write(2);

const fs = require('fs');

for (var i = 21972500; i < 22022500; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(i);
        // logger.write(i.toString());

        fs.appendFileSync('log.txt', i.toString() + '\n');

    }
}