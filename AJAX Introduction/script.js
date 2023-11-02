var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){clickMe()})

function clickMe(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    myRequest.onload = function(){
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
};

myRequest.send();
}

function renderHTML(data){
    var htmlString = "";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};

