const inquirer = require("inquirer");

class Employee {
    constructor(employeeName, id, email) {
      this.employeeName = employeeName;
      this.id = id;
      this.email = email;
    }

    getName() {
      inquirer 
        .prompt({
          type:  'input',
          name: 'memberName',
          message: "Enter the team member's name.",
        });
    }

    getID() {
      inquirer
        .prompt({
          type:  'input',
          name: 'id',
          message: "Enter their id.",
        });
    }

    getEmail() {
      inquirer
        .prompt(
        {
          type:  'input',
          name: 'email',
          message: "Enter their email address.",
        });
    }

}

module.exports = Employee;


// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`  -I don't think i need this bc they choose who they want...tbd.

// The other three classes will extend `Employee`.
