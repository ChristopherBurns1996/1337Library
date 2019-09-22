const url = new URLSearchParams(location.search);
const id = url.get('gameid');

function handleFormSubmit(form) {

    const formDataObj = {};

    for (let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;
        }
    }

    const formDataString = JSON.stringify(formDataObj);

    const xhr = new XMLHttpRequest();

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