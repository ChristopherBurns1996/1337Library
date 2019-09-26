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

xhr.open('GET', "http://34.89.59.112:9000/publishers");
xhr.send();

function publisherMenu() {
    location.href = 'PublisherMenu.html';
}

//sends the user to the update publisher page with the corrent id
function updatePublisher(id){
    location.href = 'UpdatePublisher.html?publisherid=' + id;
}

function deletePublisher(id){
    if (confirm('Are you sure you want to delete this publisher')) {
        del.onload = () => {
            console.log('load success');
            location.href = 'DisplayPublishers.html';
        };
        
        del.open('DELETE', "http://34.89.59.112:9000/publishers/" + id);
        del.send();
    } else {
        //dont delete publisher
    }
}

function newRow(data){
    //creates a new row in the table
    nr = document.createElement("tr");
    //creates a column in the table for the publisher ID
    publisherI = document.createElement("td");
    nr.append(publisherI);
    publisherI.innerHTML = data.publisherid;
    //creates a column in the table for the publisher name
    publisherN = document.createElement("td");
    nr.append(publisherN);
    publisherN.innerHTML = data.publisherName;
    //creates a column in the table for the current CEO
    publisherCEO = document.createElement("td");
    nr.append(publisherCEO);
    publisherCEO.innerHTML = data.currentCEO;
    //creates a column in the table for the year the company was established
    publisherYE = document.createElement("td");
    nr.append(publisherYE);
    publisherYE.innerHTML = data.yearEstablished;
    //creates a column in the table for the update publisher button
    publisherUpd = document.createElement("td");
    nr.append(publisherUpd);
    upB = document.createElement("button");
    upB.onclick = function() { updatePublisher(data.publisherid) }
    publisherUpd.append(upB);
    //creates a column in the table for the delete publisher button
    publisherDel = document.createElement("td");
    nr.append(publisherDel);
    delB = document.createElement("button");
    delB.onclick = function() { deletePublisher(data.publisherid) }
    publisherDel.append(delB);
    //adds the new publisher info to the table
    document.getElementById("publisherTable").append(nr);
}