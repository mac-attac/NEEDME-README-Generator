// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const addLicense = require('./utils/addLicense')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository?',
    },
    { 
        type: 'input',
        name: 'what',
        message: 'What was your motivation in creating this repo?',
    },
    { 
        type: 'input',
        name: 'why',
        message: 'Why did you build this project repo?',
    },
    { 
        type: 'input',
        name: 'how',
        message: 'How does your project solve a problem and how does it do so?',
    },
    { 
        type: 'input',
        message: 'Are there any specific installation instructions for your repo?',
        name: 'install',
    },
    { 
        type: 'input',
        message: 'Include any info on how your project should be used (enter screenshot links here, if desired).',
        name: 'usage',
    },
    { 
        type: 'input',
        message: 'Please list any collaborators here if you would like to (if there are no other collaborators, leave blank)',
        name: 'credit',
    },
    { 
        type: 'input',
        message: 'In what year are you creating this license?',
        name: 'licenseYear',
    },
    { 
        type: 'input',
        message: 'What is your name or the name of your organization you would like to create a license under?',
        name: 'licenseName',
    },
    { 
        type: 'rawlist',
        message: 'Which type of license would you like for your repo?',
        choices: ['None', 'Apache License 2.0','GNU General Public License v3.0', 'MIT License'],
        name: 'licenseValue'
    },
    { 
        type: 'confirm',
        message: 'Would you like to add the Contributor Covenant guidelines for any potential contributors?',
        name: 'confirmContributorCovenant',
    },
    { 
        type: 'input',
        message: 'Add any tests here run on your code.',
        name: 'tests',
    },
    { 
        type: 'input',
        message: 'What is your GitHub username',
        name: 'username',
    },
    { 
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {writeToFile('README.md', generateMarkdown(answers))},
             (answers => {writeToFile('LICENSE.txt', addLicense(answers))}))

}
// Function call to initialize app
init();
