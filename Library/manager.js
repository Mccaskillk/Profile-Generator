// linking to employee.js
const Employee = require("./Employee");

// Manager class 
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}

// exports Manager module
module.exports = Manager