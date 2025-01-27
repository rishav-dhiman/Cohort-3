
// real operation that we want to promisfy
console.log("resolve function is declared");
function doAsyncOp(resolve) {
    console.log("resolve is called");
    setTimeout(resolve, 3000); // old, callback based, async function
}

console.log("new promise is called");
const p = new Promise(doAsyncOp);
console.log("promise is completed");

function callback(){
    console.log("3 seconds have passed, callback function is called by resolve");
}
p.then(callback)