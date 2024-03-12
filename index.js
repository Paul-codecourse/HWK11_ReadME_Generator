const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// const { memoryUsage } = require("process");

// array of questions for user
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
  // Prompt for License -> add to License section and add a relevant badge to the top of the file
  {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'Apache-2.0.', 'GPL', 'BSD', 'None'],
  },  // Prompt for contribution guidelines -> add to Contributing section
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
// Make the logo/badge for the specific license selected appear at the top of the README
// Make a description of the specific license chosen appear under **License**
// Make the prompted GitHub username information appear in the section of the README entitled Questions, with a link to their GitHub profile (eg standardised "https://github.com/${githubUsername}")  for 
// Make sure instructions on how to reach you with extra questions appear with your email address in the section called Questions
// Make sure all of the following sections are created. *Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions (make sure to add the relevant markup eg. **)
// Make sure When the user click on a link in the Table of Contents it links to the corresponding section of the README

// In the Repo:-
// Make sure there is a link to the walkthrough video included in the Usage section of the Readme
// Make sure that the repo contains the .gitignore that covers the node modules and the Apple DS_Store
// Make sure that the repo contains the package.json with the dependencies by running the npm init command




// Make sure to declare dependancies in the Repo such as npm and inquirer




// fixed array identifier issues
function writeToFile(fileName, data) {
  let badgeSelection = "";
  if (data.license=="MIT") {
    badgeSelection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license=="Apache-2.0.") {
      badgeSelection = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (data.license=="GPL") {
        badgeSelection = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        } else if (data.license=="BSD") {
          badgeSelection = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          } else if (data.license=="None") {
              badgeSelection="";
              }
  let licenseSelection = "";
  if (data.license=="MIT") {
    licenseSelection = "A permissive license with very few restrictions, allowing the sale, copying, modification, and distribution, as long as the MIT license is declared and the creators copyright notice is attached to any subsequent copies. For more details and an example license see https://opensource.org/license/MIT";
  } else if (data.license=="Apache-2.0.") {
      licenseSelection = "A permissive license with very few restrictions, allowing the relicensing of derivative works on more restrictive license terms. However it is important to note that unmodified components are not able to have the more restrictive license applied and must have the original Apache 2.0 license attached. For more details and an example license see https://opensource.org/license/apache-2-0 ";
      } else if (data.license=="GPL") {
        licenseSelection = "Copies, derivatives or modifications of the licensed item must also be released under the GPL v3. License. For more details and an example license see https://opensource.org/license/gpl-3-0";
        } else if (data.license=="BSD") {
          licenseSelection = "Redistributions of items licensed under this must follow these terms. Source code distributions must retain the copyright notice, conditions and disclaimer. Binary form distributions must retain the copyright notice, conditions and disclaimer and any other materials provided with the original distribution. The name of the copyright holder and or contributors must not be used to endorse or promote products without written permission. For more details and an example license see https://opensource.org/license/bsd-3-clause ";
          } else if (data.license=="None") {
              licenseSelection="This would result in a project with no controlled license";
              }              
  const readmeContent = `
# Title

${data.title}

## Description
${badgeSelection}

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

## License

${data.license}
${licenseSelection}

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
// -working anchor links - tested working
// -links to explanation of license
// -selected license badge display