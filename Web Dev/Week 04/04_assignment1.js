// Create a command line/CLI interface that lets the user specify a file path and the nodejs process counts the number of words inside it.

// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('File based CLI')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });
  
program.command('count_lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();