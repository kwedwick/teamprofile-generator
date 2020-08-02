const Manager = require('../lib/Manager')

class Manager extends Employee {
    constructor(officeNumber = '') {
        super();
        this.officeNumber = officeNumber;
    }

}