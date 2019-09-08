function gameMenu() {
    location.href = 'GameMenu.html';
}

function updateGame(){
    location.href = 'UpdateGame.html';
}

function deleteGame(){
    if (confirm('Are you sure you want to delete this game?')) {
        //delete game
    } else {
        //dont delete game
    }
}