const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }

    getGithub() {
        
    }
}



// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`