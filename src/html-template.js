//contains the html markup for the page


const generateManager = (manager) => {
    if (!manager) {
        return '';
    }

}



const generateEngineers = (engineers) => {
    if (engineers === []) {
        return '';
    }


}

const generateInterns = (interns) => {
    if (interns === []) {
        return '';
    }
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
                <div>
                    {generateManager(group.manager)}
                </div>
            </div>
            <div id="engineerContainer" class="row">
                <div id="engineerCardContainer" class="card">
                    {generateEngineers(group.engineers)}
                </div>
            </div>
            <div id="internContainer" class="row">
                <div id="internCardContainer" class="card">
                    {generateInterns(group.interns)}
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `
};

