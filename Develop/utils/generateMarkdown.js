// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license != "none") {
  return `[![Github badge](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io/)`
}
return "";

} 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (link != "none") {
  return `[![Github badge](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io/)`;
}
return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
by ${data.name}
# Description
${data.description}
# Table of Contents
*[Installation](#Install)
*[Usage](#Usage)
*[License](#License)
*[Contributing](#Contributers)
*[Tests](#Test)
*[Contact](#Contact)
# Install
${data.install}
# Usage
${data.usage}
# License
${data.license}
# Contributing
${data.contributor}
# Tests
${data.test}
# Contact 
Name: ${data.name}
Github: [${data.github}](https://github.com/${data.github}/)
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
