var inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return `# ${answers.title}
  ---
  ## ${answers.description}
  ```

  ```
  ## Table of Contents
  * [Installation]${answers.installation}
  * [Usage]${answers.usage}
  * [Credits]${answers.license}
  * ${answers.license}
  #### Contributing
  ${answers.contribution}
  
`;
}


module.exports = generateMarkdown;
