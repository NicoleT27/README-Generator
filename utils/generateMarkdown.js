// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "BSD") {
    return "![Github License](https://img.shields.io/badge/License-BSD-blue.svg)";
  } else if (license === "MIT") {
    return "![Github License](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (license === "GNU GPL 3.0") {
    return "![Github License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![Github License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "ISC") {
    return "![Github License](https://img.shields.io/badge/License-ISC-blue.svg)";
  } else if (license === "none") {
  return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "BSD") {
    return "https://opensource.org/licenses/BSD-2-Clause/";
  } else if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === "GNU GPL 3.0") {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === "Apache 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC/";
  } else if (license === "none") {
  return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License `;
  } else {
  return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## ${data.Title}
by ${data.Name}
<br>
Licensed under 
<br>
${renderLicenseBadge(data.License)}
## Description
${data.Description}
## Table of Contents
[Installation](#install)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)
## Install
${data.Install}
## Usage
${data.Usage}
## License
${data.License}
## Contributing
${data.Contributers}
## Tests
${data.Test}
## Questions 
Should you have any questions feel free to reach me with the contact information below
Name: ${data.Name}
Github: (https://github.com/${data.Github}/)
Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
