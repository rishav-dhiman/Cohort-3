// # Assignment 1
// function totalSum(a, b) {
//     let totalSum = a + b;
//     return totalSum;
// }
// let a1 = totalSum("Harkirat ", 4);
// console.log(a1);


// # Assignment 2
// function canVote(age){
//     if(age > 18){
//         console.log("You can vote");
//         return true;
//     }
//     else{
//         console.log("You cannot vote");
//         return false;
//     }
// }
// let person1 = canVote(10);
// console.log(person1);


// // # Assignment 3
// function greet(user){
//     console.log("Hello, " + user.name + " your age is " + user.age);
// }
// let user = {
//     name: "Harkirat",
//     age: 19
// }
// greet(user);


// // # Assignment 4
// function greet(user){
//     console.log("Hello, "+ user.gender + user.name + " your age is " + user.age)
// }
// let user = {
//     name: "Harkirat",
//     age: 19,
//     gender: "Male"
// }
// if (user.gender == "Male"){
//     user.gender = "Mr. "
// }
// else{
//     user.gender = "Ms. "
// }
// greet(user);

// function canVote(age){
//     if(age > 18){
//         console.log("You can vote");
//     }
//     else{
//         console.log("You cannot vote");
//     }
// }
// canVote(user.age);


// // # Assignment 5
// function solve(arr){
//     // initialize a new array, push to a new array
//     // or
//     // you can use the filter function inside an array, map, reduce
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].gender == "male" && arr[i].age > 18){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// const users = [{
//     name: "Harkirat",
//     age: 21,
//     gender: "male"
// }, {
//     name: "Priya",
//     age: 21,
//     gender: "female"
// }, {
//     name: "Raman",
//     age: 22,
//     gender: "male"
// }]

// const ans = solve(users)
// console.log(ans);