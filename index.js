const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const Employee = require('./lib/employee');

// function to write HTML file
// function writeToFile(fileName, htmlContent) {
//     fs.writeFile('./dist/index.html', htmlContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// }

// initializes app; when it's initialized, inquirer.prompt iterates through each question in the questions array; .then grabs the htmlContent created in generateHTML.js, and passes that content to the writeToFile function
function init() {
    const manager = new Employee;
    manager.getName();
    manager.getID();
    manager.getEmail();
    inquirer
        .prompt({
            type: 'list',
            name: 'nextEmployee',
            message: 'Which would you like to add next?',
            choices: [
                'Engineer',
                'Intern',
                'None, all team information has been entered'
            ]
        })
        // .then((answers) => { 
        //     const htmlContent = generateHTML(answers);
        //     writeToFile('./dist/index.html', htmlContent);
        // })
};

// Function call to initialize app
init();


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