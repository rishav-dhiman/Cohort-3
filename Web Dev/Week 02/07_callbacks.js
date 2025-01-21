const fs = require("fs");

function print(err, data){
    console.log(data);
}

fs.readFile("04_a.txt", "utf-8", print); // asynchronously

fs.readFile("04_b.txt", "utf-8", print); // asynchronously

console.log("Done!");

function readFile(filePath, encoding, op) {
    // read file
    op("Error!!", "hi there")
}