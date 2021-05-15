// var message = 'Hello Node';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// notice the lack of parentheses around the 'profileDataArr' parameter?
const printProfileData = (profileDataArr) => {
    // This ...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('=====================');
    
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));

printProfileData(profileDataArgs)
};
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