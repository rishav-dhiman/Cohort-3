import chalk from 'chalk'; // modern import syntax, instead of (const fs = require("fs");) in mjs

console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));