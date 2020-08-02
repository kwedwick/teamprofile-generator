//start of the program to call functions

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/html-template')

const group = {
    manager: {},
    engineers: [],
    interns: []
}

function promptQuestions() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'managerConfirm',
                message: 'Create Manager profile?',
                default: true
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Write name of Manager:',
                when: ({ managerConfirm }) => managerConfirm,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's name.");
                        return false;
                    }
                },
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter Id# only:',
                validate: idNumber => {
                    if (idNumber) {
                        return true;
                    } else {
                        console.log(" Please enter their Id number only.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter full email address:',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(" Please enter email address.");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter their office number - only numbers',
                validate: phoneNumber => {
                    if (phoneNumber) {
                        return true;
                    } else {
                        console.log(" Please enter numbers only.");
                        return false;
                    }
                }
            }
        ]).then(managerData => {
            group.manager = new Manager(managerData.manager, managerData.id, managerData.email, managerData.officeNumber)
            console.log(group.manager.getRole());
            //generateHTML(group);
            let enterCreationLoop = confirmNewEmployee();
            while (enterCreationLoop) {
                createnewEmployee();
                enterCreationLoop = confirmNewEmployee();
            }


        })
}

function createnewEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Choose an employee type',
                choices: ['Engineer', 'Intern'],
                when: ({ newEmployeeConfirm }) => newEmployeeConfirm
            }
        ]).then(employeeData => {
            if (employeeData.employeeType === 'Engineer') {
                inquirer
                    .prompt([

                    ])
                    .then(engineerData => {
                        group.engineers.push(new Engineer(engineerData))
                    })
            } else if (employeeData.employeeType === 'Intern') {
                inquirer
                    .prompt([

                    ])
                    .then(internData => {
                        group.interns.push(new Intern(internData))
                    })
            }
        })

}
function confirmNewEmployee() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'newEmployeeConfirm',
                message: 'Create a new Employee?',
                default: true
            },
        ]).then(answer => {
            return answer.newEmployeeConfirm
        })
}

promptQuestions();