// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// pulls generate markdown functions, notr linking correctly
const render = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// basic questions
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title?"
        },
        {
            type: "input",
            name: "description",
            message: "What does your project do?"
        },
        {
            type: "input",
            name: "installation instructions",
            message: "How do you install your program?"
        },
        {
            type: "input",
            name: "usage information",
            message: "input?"
        },
        {
            type: "input",
            name: "contribution guidelines",
            message: "How to contribute?"
        },
        {
            type: "input",
            name: "test instructions",
            message: "test instructions"
        },
        {
            type: "checkbox",
            message: "choose a license",
            name: "license",
            choices: [
                "Apache License 2.0",
                "GNU General Public License 2.0",
                "MIT License",
                "BSD 2-Clause"
            ]
        },
    ])
}
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    var fileName = "README.md"

    fs.appendFile(fileName, render.generateMarkdown(data), function (err) {

        if (err) {
            console.log(err);
        }
        else {
            console.log("Commit logged!");
        }

    });
}

// TODO: Create a function to initialize app


// Function call to initialize app
init().then(writeToFile);
