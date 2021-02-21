// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// pulls generate markdown functions, notr linking correctly
const render = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
// basic questions
const questions = ["Title?", "description", "installation instructions", "usage information", "contribution guidelines", "test instructions" ];

inquirer
  .prompt([questions
    /* Pass your questions in here */
  ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileName = "README.md"

    fs.appendFile(fileName, render.generateMarkdown(data) , function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Commit logged!");
        }
      
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
