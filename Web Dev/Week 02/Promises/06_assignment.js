// create the promisified version of fs.readFile, fs.writeFile, cleanFile

// Promisified version of fs.readFile
const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        sendTheFinalValueHere(data);
    })
}

function readFile(fileName) {
    // read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
    console.log(contents);
}
// call the callback function with the contents of the file
p.then(callback)