const xhr = new XMLHttpRequest();

xhr.onload = () => {
    console.log('load success');
    data = JSON.parse(xhr.response);
    console.log(data[10].gameName);
    document.getElementById("gn").innerHTML = data[10].gameName;
};

xhr.open('GET', "http://34.89.59.112:9000/Games");
xhr.send();

function gameMenu() {
    location.href = 'GameMenu.html';
}

function updateGame() {
    location.href = 'UpdateGame.html';
}

function deleteGame() {
    if (confirm('Are you sure you want to delete this game?')) {
        //delete game
    } else {
        //dont delete game
    }
}