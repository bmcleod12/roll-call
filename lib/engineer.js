const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // super("brenna", 1234, "email@email");
        super(name, id, email);
        this.gitHub = gitHub;
    }
}
    Engineer.prototype.getGithub = function() {
        return this.gitHub;
    }

    Engineer.prototype.getRole = function() {
        return "Engineer";
    }

module.exports = Engineer;