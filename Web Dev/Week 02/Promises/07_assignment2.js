// Promisified version of fs.writeFile

const fs = require("fs");

function writeInTheFile(sendTheFinalValueHere) {
    fs.writeFile("a.txt", 'Hello, how are you', function(err, data) {
        sendTheFinalValueHere(data);
    })
}

function writeFile(fileName) {
    // read the file and return its value
    return new Promise(writeInTheFile);
}

const p = writeFile();

function callback(contents) {
    console.log(contents);
}
// call the callback function with the contents of the file
p.then(callback)