const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is yourname? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitacct',
            message: 'Enter your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        },
    ]);
}

// const promptProject = portfolioData => {
//     console.log(`
//     =================
//     Add a New Project
//     =================
//     `);

//         // If there is no 'projects' array property, create one
//         if (!portfolioData.projects) {
//             portfolioData.projects = [];
//         }
//         return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: 'What is your project name? (Required)',
//                     validate: nameInput => {
//                         if (nameInput) {
//                             return true;
//                         } else {
//                             console.log('You need to enter a project name!');
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'input',
//                     name: 'description',
//                     message: 'Provide a description of the project (Required)',
//                     validate: descriptionInput => {
//                         if (descriptionInput) {
//                             return true;
//                         } else {
//                             console.log('You need to enter a project description');
//                             return false;
//                         }
//                     }
//                 }, 
//                 {
//                     type: 'checkbox',
//                     name: 'lang',
//                     message: 'What are the programming languages you used for this project? (Check all that apply)',
//                     choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
//                 },
//                 {
//                     type: 'input',
//                     name: 'link',
//                     message: 'Enter the GitHub link to your project (Required)',
//                     validate: linkInput => {
//                         if (linkInput) {
//                             return true;
//                         } else {
//                             console.log("You need to enter a project GitHub link!");
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'feature',
//                     message: 'Would you like to feature this project?',
//                     default: false
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'confirmAddproject',
//                     message: 'Would you like to enter another project?',
//                     default: false
//                 }
//             ])
//             .then(projectData => {
//                 portfolioData.projects.push(projectData);
//                 if (projectData.confirmAddProject) {
//                     return promptProject(portfolioData);
//                 } else {
//                     return portfolioData;
//                 }
//             });
// };
 
// copied from the reflection code
const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    // console.log(portfolioData);
    // will be uncommented in lesson 4
    const pageHTML = generatePage(portfolioData);
      fs.writeFile('./index.html', pageHTML, err => {
         if (err) throw new Error(err);
         console.log('Page created! Check out index.html in this directory to see it!');
      });
  });

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