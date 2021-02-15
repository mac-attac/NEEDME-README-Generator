// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else {
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `Licensed under the [Apache License 2.0](LICENSE.txt) license.`
  }
  else if (license === 'GNU General Public License v3.0') {
    return `Licensed under the [GNU General Public License v3.0](LICENSE.txt) license.`
  }
  else if (license === 'MIT License') {
    return `Licensed under the [MIT License](LICENSE.txt) license.`
  }
  else {
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else if (license === 'GNU General Public License v3.0') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else if (license === 'MIT License') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else {
    return `This repository is not under any licensing.`
  }
}

//create function for option to adopt Contributor Covenant if desired
function addContributorCovenant(confirm) {
  if (confirm === true) {
    return `This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) guidelines for contribution. Please see their [FAQ](https://www.contributor-covenant.org/faq/) for any additional questions.`
  } else {
  }
}

function addCCBadge(confirm) {
  if (confirm === true) {
    return `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`
  } else {
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.licenseValue)}${addCCBadge(data.confirmContributorCovenant)}

#${data.title}

##Description

${data.what}

${data.why}

${data.how}

##Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

##Installation

${data.install}

##Usage

${data.usage}

##Credits

${data.credit}

##License

${renderLicenseSection()}

${renderLicenseLink()}

##Contributing 

Feel free to contribute to this repository by logging bugs, submitting a pull request, or leaving a comment.

${addContributorCovenant()}
  
##Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
