const fs = require('fs');

function readFileAsync (file, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, encoding, function (err, data) {
            if (err) return reject(err); // rejects the promise with `err` as the reason
            resolve(data)          ;     // fulfills the promise with `data` as the value
        })
    })
}
readFileAsync('text.txt')
    .then(function(data) {
        console.log(data.toString());
    }, console.error
);