const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // super("brenna", 1234, "email@email");
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

// const eng = new Engineer("bmcleod12");

// console.log(eng);
// eng.printInfo();

module.exports = Engineer;