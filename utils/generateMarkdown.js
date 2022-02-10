// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README - Done but add table of contents
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description

${data.description}

## Installation

${data.instructions}

## Usage

${data.usage}

## Contributing 

${data.guidlines}

##Tests

${data.test}

## License

## Questions

GitHub Profile: https://github.com/${data.username}

Have any questions? Email me here => ${data.email}

`;
}

module.exports = generateMarkdown;
