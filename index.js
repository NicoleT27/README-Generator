// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please choose a title for your application.",
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a detailed description of your application.",
  },
  {
    type: "input",
    name: "Install",
    message:
      "What does the user need to install to be able to run your application.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please give insturctions on how to utilize your application.",
  },
  {
    type: "list",
    name: "License",
    message:"Please select a license for your application from the following",
    choices: ["BSD", "MIT", "GNU GPL 3.0", "Apache 2.0", "ISC", "none"],
  },
  {
    type: "input",
    name: "Contributers",
    message: "Did you have any contributors? If so, please name them.",
  },
  {
    type: "input",
    name: "Test",
    message: "What commands does the user need to test the application?",
  },
  {
    type: "input",
    name: "Name",
    message: "Please enter your full name.",
  },
  {
    type: "input",
    name: "Github",
    message: "Please enter your github username.",
  },
  {
    type: "input",
    name: "Email",
    message: "Lastly please enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log("There has been an error");
    } else {
      console.log("Success, Your README.md file is ready!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log("Generating your professional README file...");
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}
// Function call to initialize app
init();
