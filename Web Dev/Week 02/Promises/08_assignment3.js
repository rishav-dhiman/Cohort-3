
const fs = require("fs");

console.log("----top of the file----");
function readTheFile(resolve) {
    console.log("readTheFile called");
    setTimeout(function() {
        console.log("callback based setTimeout completed");
        resolve();
    } ,3000);
}

function setTimeoutPromisified(fileName) {
    console.log("setTimeoutPromisified called");
    // read the file and return its value
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback() {
    console.log("Timer is done");
}
p.then(callback)

console.log("----end of the file----");

// class Promise2 {
//     constructor(fn) {
//         function afterDone() {
//             this.resolve();
//         }
//         fn(afterDone);
//     }
//     then(callback) {
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve) {
//     setTimeout(function() {
//         console.log("callback based setTimeout completed");
//         resolve();
//     } ,3000);
// }

// function setTimeoutPromisified() {
//     return new Promise2(readTheFile)
// }

// let p = setTimeoutPromisified();
// function callback() {
//     console.log("Callback has been called");
// }
// p.then(callback);