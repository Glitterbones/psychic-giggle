// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions= () => {
    return inquirer.prompt([
        {
          type: "input", 
          name: "'email", 
          message: "Enter a valid email"
        }, 

        {
        type: "input", 
        name:"questions",
        Message:"GitHub Username", 
    }, 

    {
        type: "input",
        Name:" Title", 
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

function init() {
    questions()
        .then((inquirerResponse) => {
            console.log("ReadMe completed");
            console.log(inquirerResponse);

            // console.log(markdown(inquirerResponse));
            fs.writeFileSync("ReadME.md", markdown({ ...inquirerResponse }));
        })
        .catch(err => {
            console.log(err)
        });
}

// Function call to initialize app
init();
