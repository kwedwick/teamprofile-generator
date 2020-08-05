//contains the html markup for the page


const generateManager = (manager) => {
    if (manager.length === 0) {
        return '';
    }
    const {name, id, email, officeNumber} = manager;
    return `
        <div class="card-body">
            <h3 class="card-title">${name}</h3>
            <h4 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h4>
            <p class="card-text">ID: ${id}</p>
            <a href="mailto:${email}">Email: ${email}</a>
            <p class="card-text">Phone#: ${officeNumber}<p>
        </div>
    `
};



const generateEngineers = (engineers) => {
    if (engineers.length === 0) {
        return '';
    }
    const {name, id, email, github} = engineers
    return `
    <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${engineers.getRole()}</h4>
        <p class="card-text">ID: ${id}</p>
        <a href="mailto:${email}">Email: ${email}</a>
        <a href="${engineers.getGithub()}">Github Profile: ${github}<p>
    </div>
`


}

const generateInterns = (interns) => {
    if (interns.length === 0) {
        return '';
    }
    const {name, id, email, school} = interns
    return `
    ${interns.forEach(intern =>
    `<div class="card-body">
        <h3 class="card-title">${intern.name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h4>
        <p class="card-text">ID: ${intern.id}</p>
        <a href="mailto:${intern.email}">Email: ${intern.email}</a>
        <p class="card-text">${intern.getSchool()}<p>
    </div>
    `
    )}
`
}


module.exports = group => {
    console.log("html page", group)
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Employees</title>
</head>

<body>
    <header>
        <h1 class="text-light bg-dark text-center font-weight-bold">EMPLOYEE LIST</h1>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div id="managerContainer" class="card">
                    ${generateManager(group.manager)}
                </div>
            </div>
            <div id="engineerContainer" class="row">
                <div id="engineerCardContainer" class="card">
                    ${generateEngineers(group.engineers)}
                </div>
            </div>
            <div id="internContainer" class="row">
                <div id="internCardContainer" class="card">
                    ${generateInterns(group.interns)}
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `
};

