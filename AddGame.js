function handleFormSubmit(form) {
    //this loop goes through each element of the form and adds the information to an object
    const formDataObj = {};

    for (let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;
        }
    }

    const formDataString = JSON.stringify(formDataObj);

    const xhr = new XMLHttpRequest();

    //this section of code sends an api call to the database with the information provided in the form
    xhr.onload = () => {
        console.log('load success');
        location.href = "GameMenu.html";
    };

    xhr.open('POST', "http://34.89.59.112:9000/Games");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(formDataString);
    return false;
}

function gameMenu() {
    location.href = "GameMenu.html";
}
