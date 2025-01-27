const fs = require("fs");

function cleanFile(filePath, callback) {
    fs.readFile(filePath, "utf-8", )
    data = data.trim();
    callback();
}

function onDone() {
    console.log("file is cleaned");
}
cleanFile("a.txt", onDone)