// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licenseValue === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (data.licenseValue === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (data.licenseValue === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else {
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licenseValue === 'Apache License 2.0') {
    return `Licensed under the [Apache License 2.0](LICENSE.txt) license.`
  }
  else if (data.licenseValue === 'GNU General Public License v3.0') {
    return `Licensed under the [GNU General Public License v3.0](LICENSE.txt) license.`
  }
  else if (data.licenseValue === 'MIT License') {
    return `Licensed under the [MIT License](LICENSE.txt) license.`
  }
  else {
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licenseValue === 'Apache License 2.0') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else if (data.licenseValue === 'GNU General Public License v3.0') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else if (data.licenseValue === 'MIT License') {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`
  }
  else {
    return `This repository is not under any licensing.`
  }
}

//create function for option to adopt Contributor Covenant if desired
function addContributorCovenant(data) {
  if (data.confirmContributorCovenant === true) {
    return `This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) guidelines for contribution. Please see their [FAQ](https://www.contributor-covenant.org/faq/) for any additional questions.`
  } else {
  }
}

function addCCBadge(data) {
  if (data.confirmContributorCovenant === true) {
    return `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`
  } else {
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data)}${addCCBadge(data)}

# ${data.title}

## Description

${data.what}

${data.why}

${data.how}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.credit}

## License

${renderLicenseSection(data)}

${renderLicenseLink(data)}

## Contributing 

Feel free to contribute to this repository by logging bugs, submitting a pull request, or leaving a comment.

${addContributorCovenant(data)}
  
## Tests

${data.tests}

## Questions

If you have any questions about this project, contact me on [GitHub](github.com/${data.username}) or by email at ${data.email}.
`;
}

module.exports = generateMarkdown;
