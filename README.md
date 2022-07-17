# README
  
  ## Description 
The README Generator help developers streamline creating a quality README.md file. The application allow users to create a README.md file using Node.js based on series of questions and input about the user's project.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
To begin, run npm install in order to install the following npm package dependencies as specified in the package.json:

inquirer will prompt you for your inputs from the command line.

To start the application, simply run node index.js in the command line.

Answer the question prompts in your command line to generate the README.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your username and email from GitHub.
  ## Usage 
  ![image](https://user-images.githubusercontent.com/101296284/179418736-ee699aff-d2e2-485a-b387-ab8a4e2df6db.png)
After you run node index.js, the application uses the inquirer package to prompt a series of questions about your about your project.

The application then takes your responses and generates a README file based on the user's inputs with the fs.writeFile funciton.
Please check out the "README Generator Sample Demo" gif file in this repo as an example on the final output for demonstration.
  ## License 
  This project is license under UCB
  ## Contributing 
  Steven Chai
  ## Tests
  npm test
  ## Questions
  If you have any questions about this projects, please contact me directly at schai20100@gmail.com. You can view more of my projects at https://github.com/schai2009.
