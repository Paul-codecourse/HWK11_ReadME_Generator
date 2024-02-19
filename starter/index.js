const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
// Prompt for project title -> add as the Title of the README
// Prompt for description -> add to Description section
// Prompt for Table of Contents -> add to Table of Contents section
// Prompt for installation instructions -> add to Intsallation section
// Prompt for Usage information -> add to Usage section
// Prompt for Licence -> add to Licence section and add a relevant badge to the top of the file
// Prompt for contribution guidelines -> add to Contributing section
// Prompt for test instructions -> add to Tests section
// Prompt for Questions
// Prompt for GitHub username
// Prompt for email address
];

// function to write README file
// Make the prompted for Title the Title of the README
// Add the prompts to the relevant sections Description, Installation, Usage, Contributing, and Tests
// Make the logo/badge for the specific licence selected appear at the top of the README
// Make a description of the specific licence chosen appear under **Licence**
// Make the prompted GitHub username information appear in the section of the README entitled Questions, with a link to their GitHub profile (eg standardised "https://github.com/${githubUsername}")  for 
// Make sure instructions on how to reach you with extra questions appear with your email address in the section called Questions
// Make sure all of the following sections are created. *Title, Description, Table of Contents, Installation, Usage, Licence, Contributing, Tests, Questions (make sure to add the relevant markup eg. **)
// Make sure When the user click on a link in the Table of Contents it links to the corresponding section of the README

// In the Repo:-
// Make sure there is a link to the walkthrough video included in the Usage section of the Readme
// Make sure that the repo contains the .gitignore that covers the node modules and the Apple DS_Store
// Make sure that the repo contains the package.json with the dependencies by running the npm init command


function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();





// example of a series of questions using inquirer
/*
const inquirer = import('inquirer');
const fs = require('fs')
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
*/