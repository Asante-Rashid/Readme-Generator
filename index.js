// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// pulls generate markdown functions, notr linking correctly
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// basic questions
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title?",
            default: 'Alligators, of course!',

        },
        {
            type: "input",
            name: "description",
            message: "What does your project do?",
            default: 'Alligators, of course!',

        },
        {
            type: "input",
            name: "installation instructions",
            message: "How do you install your program?",
            default: 'Alligators, of course!',

        },
        {
            type: "input",
            name: "usage information",
            message: "input?",
            default: 'Alligators, of course!',

        },
        {
            type: "input",
            name: "contribution guidelines",
            message: "How to contribute?",
            default: 'Alligators, of course!',

        },
        {
            type: "input",
            name: "test instructions",
            message: "test instructions",
            default: 'Alligators, of course!',

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
            ],

        },
    ])
        .then(function answercheck(answers) {
            var answerkey = answers
            console.log(answerkey.title)
            var fileName = "README.md"
            writeFileAsync(fileName, generateMarkdown(answers), function (err) {

                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Commit logged!");
                }

            });
        })
}


// Function call to initialize app
init();
