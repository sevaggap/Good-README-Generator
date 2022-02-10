// TODO: Include packages needed for this application - Done

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input - Done
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidlines for your project?',
        name: 'guidlines',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ["Apache_2.0,1,2"]
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
];

// TODO: Create a function to write README file - Done
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.error(err) : console.log('File successfully written!')
    )}

// TODO: Create a function to initialize app - Done
function init() {
    inquirer.prompt(questions)
    .then (function (data) {
        const response = generateMarkdown(data,questions);
        console.log(data);
        writeToFile("Generated_README.md",response);
        console.log("You have successfully created a GOOD README!");
    })
}

// Function call to initialize app - Done
init();
