// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'tablecontent',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions'
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });