function handleFormSubmit(form) {

    const formDataObj = {};

    for (let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;
        }
    }

    const formDataString = JSON.stringify(formDataObj);

    const xhr = new XMLHttpRequest();

    // xhr.onload = () => {
    //     console.log('load success');
    //     location.href = "GamesMenu.html";
    // };

    // xhr.open('POST', "url idk");
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(formDataString);
    return false;
}

function gameMenu() {
    location.href = "GameMenu.html";
}

