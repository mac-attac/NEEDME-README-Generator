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
    return ``
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
    return ``
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



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.licenseValue)}
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

##License

${renderLicenseSection()}

${renderLicenseLink()}

##Contributing 

${data.contributing}
  
##Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
