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
            message: "Your Project Title",
            default: 'Place holder title',

        },
        {
            type: "input",
            name: "description",
            message: "Description ",
            default: 'Placeholder Description',

        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
            default: 'NA',

        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use.",
            default: 'NA',

        },
        {
            type: "input",
            name: "contribution",
            message: "Guilines for contribution?",
            default: '[Contributor Covenant](https://www.contributor-covenant.org/)',

        },
        // need to add a credits option
        {
            type: "input",
            name: "testing",
            message: "tests for your application and examples on how to run them.",
            default: 'NA',

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
    ]).then(function answercheck(answers) {
        // var answerkey = answers
        // console.log(answerkey.title)
        var fileName = "EXREADME.md"
        writeFileAsync(fileName, generateMarkdown(answers), function (err) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("file made!");
            }

        });
    });
}


// Function call to initialize app
init();
