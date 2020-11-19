const inquirer = require('inquirer'); 
var fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [

    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project'
    },
    {
        name: 'description',
        type: 'input',
        message: 'How would you describe what this project is'
    },
    {
        name: 'tableOfContents',
        type: 'input',
        message: 'What sections would you like to include in your table of contents'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What is needed to install this?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is a use case for your project?'
    },
    {
        type: "checkbox",
        message: "what license are you using?",
        name: "license",
        choices: [ 
          "ISC", 
          "MIT", 
          "APN-1",
          "BSD-3",
          "GPL",
          "LGPL",
        ]
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Who all has contributed to this project?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'How can this code be tested?'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Who should be contact for questions?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}


// function to initialize program
function init() {
    inquirer
    .prompt (questions)
.then ((data) => {
    console.log("README.md has been created successfully ");
    writeToFile ("README.md", generateMarkdown({...data}))
}).catch((err)=>{
    console.log("problem with inquirer.prompt");
    console.log(err);
})
}

// function call to initialize program
init();
