
const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'GNU') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }  if (license !== "none") {
    return `![GitHub license]`;
  } else {
    return ""
  }
}

 


const renderLicenseLink = (license) => {
  if (!license) {
    return '';
  }
  if (license === 'MIT License') {
    return `
  ## License Link
  [MIT License](https://choosealicense.com/licenses/mit/)
  `;
  }
  if (license === 'GNU GPLv3 License') {
    return `
  ## License Link
  [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
  `;
  }
}


const renderLicenseSection = (license) => {
  if (!license) {
    return '';
  }
  if (license === 'MIT License') {
    return `
  ## License 
  Copyright (C) 2022
  `;
  }
  if (license === 'GNU GPLv3 License') {
    return `
  ## License
  Copyright (C) 2022
  `;
  }
}

renderLicenseBadge();

renderLicenseLink();

renderLicenseSection();

function generateMarkdown({ title, description, installation, usage, collabrators, license, questions, email }) {

  return `
  # ${title}
  ## Description
  ${description}
  
  ## Table of Contents 
  - [Usage](#usage)
  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)
  
  ## Usage
  ${usage}
  ## Installation
  ${installation}
  ## Credits
  ${collabrators}
  ## License
  ${license}
  Copyright (C) 2022
  ## Badges
  ${renderLicenseBadge(license)}
  
  ## How to Contribute
  
  ## Github
  ${questions}
  
  ## Contact
${email}

`;
}

module.exports = generateMarkdown;