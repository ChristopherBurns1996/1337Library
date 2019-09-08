function publisherMenu() {
    location.href = 'PublisherMenu.html';
}

function updatePublisher(){
    location.href = 'UpdatePublisher.html';
}

function deletePublisher(){
    if (confirm('Are you sure you want to delete this publisher')) {
        //delete publisher
    } else {
        //dont delete publisher
    }
}