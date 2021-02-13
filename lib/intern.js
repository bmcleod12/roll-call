const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        
    }
}



// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`