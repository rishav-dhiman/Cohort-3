function timeout(){
    console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to Timeout")

let c = 0;
// 3-4 seconds
for (let i = 0; i<1000000; i++) {
    c = c + 1;
}

console.log("Expensive operation done");


/* 
    Option 1 - Correct
    Hi!
    Welcome to timeout
    Expensive operation done
    Click the button!

    Option 2 - Not Correct
    Hi!
    Welcome to timeout
    Click the button
    Expensive operation done

*/