const fs = require("fs");

const contents = fs.readFileSync("04_a.txt", "utf-8"); // bytes
console.log(contents);

const contents2 = fs.readFileSync("04_b.txt", "utf-8"); // bytes
console.log(contents2);


// var user = {
//     age: 21,
//     name: "Harkirat",
//     calculateAge: function() {
//         return 10
//     }
// }

// console.log(user.calculateAge());