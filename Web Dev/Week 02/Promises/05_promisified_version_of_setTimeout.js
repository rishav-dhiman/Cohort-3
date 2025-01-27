// function waitFor3s(resolve) { // resolve = main
//     setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified() {
//     return new Promise(waitFor3s); 
// }

// function main() {
//     console.log("main is called");
// }

// setTimeoutPromisified().then(main); // promise based approach


function random(resolve) { // resolve is also a function
    setTimeout(resolve, 3000);
}

let p = new Promise(random); // supposed to return u something eventually

// using the eventual value returned by the promise
function callback() {
    console.log("promise succeeded");
}
p.then(callback);