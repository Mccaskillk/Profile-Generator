// linking to Employee.js
const Employee = require("./Employee");

//Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

// export Intern
module.exports = Intern;