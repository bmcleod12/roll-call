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
    switch (nextEmployee.role) {
        case "Engineer":
            engineerData();
            break;
        case "Intern":
            internData();
            break;
        case "None, all team information has been entered":   
            const htmlContent = generateHTML(manager, engineers, interns);   
            writeToFile('./dist/index.html', htmlContent);
    }
    })
}

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
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.gitHub);
        engineers.push(engineer);    
        nextEmployee();    
    })
}

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
    .then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        interns.push(intern);
        nextEmployee();    
    })
}

// Function call to initialize app
managerQuestions();


// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// ```