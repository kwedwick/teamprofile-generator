class Employee {
    constructor(name = '', id = Number, email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        
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
        return `${this.role}`
    }
}



module.exports = Employee;