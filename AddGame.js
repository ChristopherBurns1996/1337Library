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