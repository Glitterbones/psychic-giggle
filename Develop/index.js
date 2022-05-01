// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./develop/utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
          type: "input", 
          name: "'email", 
          message: "Enter a valid email"
        }, 

        {
        type: "input", 
        name:"GitHub",
        Message:"GitHub Username", 
    }, 

    {
        type: "input",
        Name:" Name of Project", 
        message: "Name Your project"
    }, 
    {
    type: "input", 
    Name:"description", 
    message: "What is your project?", 
}, 

{
    type: "input",
    Name:"installation", 
    message: "what are the steps to install your project?", 


}, 
{ 
    type: "input", 
    name:" usage",
    Message: "instructions and examples", 

}, 
{ 
    type:"input", 
    name:"collabrators", 
    message: "Add collaborators?", 
}, 
{
    type: "list", 
    name: "License", 
    message: " What license did you use?",
    choices: " MIT, GNU, None"
}, 

])

};




















// TODO: Create a function to write

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
