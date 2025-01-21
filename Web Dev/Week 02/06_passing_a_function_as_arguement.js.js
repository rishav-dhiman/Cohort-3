function sum(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function subtract(a, b){
    return a - b;
}
function divide(a, b){
    return a / b;
}
function doOperation(a, b, op) {
    // a = 1
    // b = 2
    // op = divide
    let val = op(a, b) // divide(1,2)
    return val
}
const ans = doOperation(1, 2, divide);
console.log(ans);