// Promise class gives u a promise, that I will return u something in future

//  settimeout is a promise, that I will return u something in future after the set time  
//  setTimeout(fn, 3000)

// callback based approach

function logName() {
    console.log("Harkirat");
}

setTimeout(logName, 3000);

// promises based approach

// defining a promise is hard, but calling a promise is easy
// returns an object of the promise class
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p; // returns the object of the promise class which has been initiated
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(5000).then(callback);// syntactically cleaner

// promises are syntactically superior way of writing callbacks