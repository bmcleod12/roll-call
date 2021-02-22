const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

    Manager.prototype.getofficeNumber = function() {
        return this.officeNumber;
    }

    Manager.prototype.getRole = function() {
        return "Manager";
    }

module.exports = Manager;