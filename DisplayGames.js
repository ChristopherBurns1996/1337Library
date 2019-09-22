const xhr = new XMLHttpRequest();
const del = new XMLHttpRequest();

xhr.onload = () => {
    console.log('load success');
    data = JSON.parse(xhr.response);
    //loops through entire tables data and puts it into table
    for(let i = 0; i < data.length; i++){
        newRow(data[i]);
    }
};

xhr.open('GET', "http://34.89.59.112:9000/Games");
xhr.send();

function gameMenu() {
    location.href = 'GameMenu.html';
}

function updateGame(id) {
    location.href = 'UpdateGame.html?gameid=' + id;
}

function deleteGame() {
    if (confirm('Are you sure you want to delete this game?')) {
        //delete game
    } else {
        //dont delete game
    }
}

function newRow(data){
    //creates a new row in the table
    nr = document.createElement("tr");
    //creates a column in the table for the game ID
    gameI = document.createElement("td");
    nr.append(gameI);
    gameI.innerHTML = data.gameid;
    //creates a column in the table for the game name
    gameN = document.createElement("td");
    nr.append(gameN);
    gameN.innerHTML = data.gameName;
    //creates a column in the table for the publisher of the game
    gamePub = document.createElement("td");
    nr.append(gamePub);
    gamePub.innerHTML = data.publisher;
    //creates a column in the table for the platform of the game
    gamePlat = document.createElement("td");
    nr.append(gamePlat);
    gamePlat.innerHTML = data.platform;
    //creates a column in the table for the year the game was released
    gameYear = document.createElement("td");
    nr.append(gameYear);
    gameYear.innerHTML = data.yearOfRelease;
    //creates a column in the table for the update game button
    gameUpd = document.createElement("td");
    nr.append(gameUpd);
    upB = document.createElement("button");
    upB.onclick = function() { updateGame(data.gameid) }
    gameUpd.append(upB);
    //creates a column in the table for the delete game button
    gameDel = document.createElement("td");
    nr.append(gameDel);
    delB = document.createElement("button");
    delB.onclick = function() { deleteGame() }
    gameDel.append(delB);
    //adds the new game info to the table
    document.getElementById("gameTable").append(nr);
}