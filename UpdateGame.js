const url = new URLSearchParams(location.search);
const id = url.get('gameid');

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
        location.href = "DisplayGames.html";
    };

    xhr.open('PUT', "http://34.89.59.112:9000/Games/" + id);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(formDataString);
    return false;
}

function displayGames() {
    location.href = 'DisplayGames.html';
}