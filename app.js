const inquirer = require('inquirer');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is yourname?'
        }
    ])
    .then(answers => console.log(answers));
// console.log(inquirer);
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// we don't need this two below because we are already using inquirer to capture input data
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// var message = 'Hello Node';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// console.log(profileDataArgs);

// // notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = (profileDataArr) => {
//     // This ...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('=====================');
    
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// printProfileData(profileDataArgs)
// };
// using function expression syntax
// const addNums = function(numOne, numTwo) {
//    return numOne + numTwo;
// };

// or using just one line (implicit return or just one action)
// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(5, 3); // sum would be 8

// or using multiple actions

// const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
// };

// Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//      return numOne + numTwo;

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// multi-line input - recoded the above arrow funx