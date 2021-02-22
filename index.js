// npm package imports
const inquirer = require('inquirer');
const fs = require('fs');

// js class files
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// data we need for the app
const generateHTML = require('./utils/generateHTML');
const engineers = [];
const interns = [];

// function to write HTML file
function writeToFile(fileName, htmlContent) {
    fs.writeFile('./dist/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
}

// gathers the manager information
function managerQuestions() {
    inquirer
    .prompt([
        {
            type:  'input',
            name: 'managerName',
            message: "Enter the manager's name.",
        },
        {
            type:  'input',
            name: 'id',
            message: "Enter the manager's id.",
        },
        {
            type:  'input',
            name: 'email',
            message: "Enter the manager's email address.",
        },
        {
            type:  'input',
            name: 'officeNumber',
            message: "Enter the manager's office number.",
        }
    ])
    // constructs a new manager
    .then(managerData => {
        manager = new Manager(managerData.managerName, managerData.id, managerData.email, managerData.officeNumber);
        nextEmployee();
    });
}

// determines which type of team member to create next, if any
function nextEmployee() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which would you like to add next?',
            choices: [
                'Engineer',
                'Intern',
                'None, all team information has been entered'
            ]
        }
    ])
    .then(nextEmployee => {
    // passes the answer to the question above to evaluate which function to call next
    switch (nextEmployee.role) {
        case "Engineer":
            engineerData();
            break;
        case "Intern":
            internData();
            break;
        // writes the html file by passing over the team data
        case "None, all team information has been entered":   
            const htmlContent = generateHTML(manager, engineers, interns);   
            writeToFile('./dist/index.html', htmlContent);
    }
    })
}

// gathers engineer data
function engineerData() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email."
            
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter the engineer's GitHub username."            
        }
    ])
    // constructs the engineer and goes back to next team member menu
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.gitHub);
        engineers.push(engineer);    
        nextEmployee();    
    })
}

// gathers inten data
function internData() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email."
            
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school."            
        },
    ])
    // constructs the intern and goes back to the next team member menu
    .then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        interns.push(intern);
        nextEmployee();    
    })
}

// Function call to initialize app
managerQuestions();