class Employee {
    constructor(name = '', id = Number, email = '') {
        this.name = name;
        this.id = id;
        this.email = email;

        
    }
    getName() {
        return `${this.name}`;
    }
    getEmail() {
        return `Email: ${this.email}`;
    }
    getId() {
        return `ID: ${this.id}`;
    }
    getRole() {
        return `Employee`;
    }
}



module.exports = Employee;