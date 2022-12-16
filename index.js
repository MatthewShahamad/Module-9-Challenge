// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the app?',
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Describe what the app does',
    },
    {
      type: 'input',
      name: 'howTo',
      message: 'How does this app work?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install the app?',
    },
    {
      type: 'input',
      name: 'reportIssues',
      message: 'How do users of the app report issues?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can users make contributions to the app?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {'README.md', createReadMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    }

// TODO: Create a function to initialize app
function init() {  promptUser()
    .then((answers) => writeFile('README.md', createReadMe(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));}

// Function call to initialize app
init();
