const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
/*const generateMarkdown = require("./utils/generateMarkdown");
const { memoryUsage } = require("process");

// array of questions for user
inquirer*/
// fixing inquirer placement
const questions = [
  // Prompt for project title -> add as the Title of the README
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  // Prompt for description -> add to Description section
  {
    type: 'input',
    message: 'Provide a description of your project:',
    name: 'description',
  },
  // Prompt for Table of Contents -> add to Table of Contents section // Don't really need this as the layout is standard
  /*{
    type: 'input',
    message: 'Enter a Table of Contents for your README:',
    name: 'tableOfContents',
  },*/
  // Prompt for installation instructions -> add to Intsallation section
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  // Prompt for Usage information -> add to Usage section
  {
    type: 'input',
    message: 'How should the project be used?',
    name: 'usage',
  },
  // Prompt for Licence -> add to Licence section and add a relevant badge to the top of the file
  {
    type: 'list',
    message: 'Choose a licence for your project:',
    name: 'licence',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  // Prompt for contribution guidelines -> add to Contributing section
  {
    type: 'input',
    message: 'Explain the contribution guidelines:',
    name: 'contribution',
  },
  // Prompt for test instructions -> add to Tests section
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'tests',
  },
  // Prompt for Questions
  // Prompt for GitHub username
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubUsername',
  },
  // Prompt for email address
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'eMail',
  }
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




// Make sure to declare dependancies in the Repo such as npm and inquirer




// fixed array identifier issues
function writeToFile(fileName, data) {
  const readmeContent = `
# Title

${data.title}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

For any questions, clarifications, comments, or suggestions, please contact ${data.githubUsername}. Who can be found at https://github.com/${data.githubUsername} or email on ${data.eMail}.
`;

fs.writeFileSync(fileName, readmeContent);
console.log(`${fileName} file created successfully.`);
}

// function to initialize program
function init() {
//inquirer call
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
    })
  }
// function call to initialize program
init();

// Still to add 
// -working anchor links
// -links to explanation of license
// -selected licence badge display



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