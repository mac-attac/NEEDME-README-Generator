// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
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
        message: 'What is your name or the name of your organization you would like to create a license under?',
        name: 'licenseName',
    },
    { 
        type: 'input',
        message: 'Include any info on how your project should be used (enter screenshot links here, if desired).',
        name: 'usa',
    },
    { 
        type: 'checkbox',
        message: 'Which type of license would you like for your repo?',
        choices: ['Apache License 2.0','GNU General Public License v3.0', 'MIT License', 'None'],
        value: 'licenseValue'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//Create an addLicense function to generate a .txt file with the License info inside
function addLicense() {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {writeToFile('README.md', generateMarkdown(answers))})
        .then(fs.writeFile('LICENSE.txt', addLicense(answers)))

}
// Function call to initialize app
init();
