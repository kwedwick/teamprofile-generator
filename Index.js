//start of the program to call functions

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const templateHtml = require('./src/html-template');
const generatePages = require('./utils/generate-pages');
const { writeFile, copyFile } = require('./utils/generate-pages');

const group = {
    manager: {},
    engineers: [],
    interns: []
};

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
                when: ({ managerConfirm }) => managerConfirm,
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
                when: ({ managerConfirm }) => managerConfirm,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(" Please enter an email address.");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter their office number - only numbers',
                when: ({ managerConfirm }) => managerConfirm,
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
            // let enterCreationLoop = confirmNewEmployee();
            // console.log("this is ecl", enterCreationLoop)
            // while (enterCreationLoop) {
            //     createnewEmployee();
            //     enterCreationLoop = confirmNewEmployee();
            // }
        }).then(confirmNewEmployee)
};

function createnewEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Choose an employee type',
                choices: ['Engineer', 'Intern'],
                //when: ({ newEmployeeConfirm }) => newEmployeeConfirm
            }
        ]).then(employeeData => {
            if (employeeData.employeeType === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Write name of the Engineer:',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter Engineer's name.");
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
                                    console.log(" Please enter an email address.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'Enter their github username:',
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log(" Please enter their github username.");
                                    return false;
                                }
                            }
                        },
                    ])
                    .then(engineerData => {
                        group.engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github))
                    }).then(confirmNewEmployee)
            } else if (employeeData.employeeType === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Write name of the Intern:',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter Interns's name.");
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
                                    console.log(" Please enter an email address.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Enter Intern's school:",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log(" Please enter Intern's school.");
                                    return false;
                                }
                            }
                        },
                    ])
                    .then(internData => {
                        group.interns.push(new Intern(internData.name, internData.id, internData.email, internData.school))
                    })
                    .then(confirmNewEmployee)
            }
        })

};
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
            if (answer.newEmployeeConfirm === true) {
                createnewEmployee();
            }
            else if (answer.newEmployeeConfirm === false) {
                createDocs();
            }
        })
};

// function createDocs() {
//     templateHtml(group)
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .catch(err => {
    //     console.log(err);
    // })
// }

function createDocs() {
    var data = templateHtml(group);
    writeFile(data)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    })
}

promptQuestions();