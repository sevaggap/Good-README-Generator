// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Apache 2.0 License") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license == "Boost Software License 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (license == "BSD 3-Clause License") {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache 2.0 License") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "Boost Software License 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license == "BSD 3-Clause License") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "Apache 2.0 License") {
    return `Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
            You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
    
            Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
  } else if (license == "Boost Software License 1.0") {
    return `Licensed under the Boost Software License, Version 1.0 (the "License"); you may not use this file except in compliance with the License.
            You may obtain a copy of the License at https://www.boost.org/LICENSE_1_0.txt.

            Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
  } else if (license == "BSD 3-Clause License") {
    return `Licensed under the BSD 3-Clause License (the "License"); you may not use this file except in compliance with the License.
            You may obtain a copy of the License at https://opensource.org/licenses/BSD-3-Clause.

            Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
  } else return ""
}

// TODO: Create a function to generate markdown for README - Done but add table of contents
function generateMarkdown(data) {
  
  let licensebadge = renderLicenseBadge(data.license);
  let licenselink = renderLicenseLink(data.license);
  let licensesection = renderLicenseSection(data.license);
  
  return `# ${data.title} [${licensebadge}](${licenselink})

## Table of Contents
* [Description](#desc) <br>
* [Installation](#install) <br>
* [Usage](#usage) <br>
* [Contributing](#contributing) <br>
* [Tests](#tests) <br>
* [License](#license) <br>
* [Questions](#questions) <br>

<a name="desc"></a>
## Description

${data.description}

<a name="install"></a>
## Installation

${data.instructions}

<a name="usage"></a>
## Usage

${data.usage}

<a name="contributing"></a>
## Contributing 

${data.guidlines}

<a name="tests"></a>
## Tests

${data.test}

<a name="license"></a>
## License

${licensesection}

<a name="questions"></a>
## Questions

GitHub Profile: https://github.com/${data.username}

Have any questions? Email me here => ${data.email}`;
}

module.exports = generateMarkdown;
