// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// function writeToFile(fileName, data) {
//   fs.appendFile(fileName, data + '\n', function(err) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         console.log("Commit logged!");
//       }
    
//     });
// }

module.exports = generateMarkdown;
