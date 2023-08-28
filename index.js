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
    type: "input",
    name: "License",
    message:
      "Please select a license for your application from the following : BSD, MIT, GNU GPL 3.0, Apache 2.0, ISC, or none.",
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
    name: "Full Name",
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
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log("There has been an error");
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(...data));
    console.log("Generating your professional README file");
  });
}
// Function call to initialize app
init();
