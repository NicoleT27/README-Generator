// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "BSD") {
    return "";
  } else if (license === "MIT") {
    return "![Github License](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (license === "GNU GPL 3.0") {
    return "![Github License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![Github License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "ISC") {
    return "![Github License](https://img.shields.io/badge/License-ISC-blue.svg)";
  }
  return "";
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
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license != "none") {
  return `## License `;
}
return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
by ${data.name}
## Description
${data.description}
## Table of Contents
*[Installation](#Install)
*[Usage](#Usage)
*[License](#License)
*[Contributing](#Contributers)
*[Tests](#Test)
*[Contact](#Contact)
## Install
${data.install}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributor}
## Tests
${data.test}
## Contact 
Name: ${data.name}
Github: [${data.github}](https://github.com/${data.github}/)
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
