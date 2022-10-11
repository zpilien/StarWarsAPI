//console.log('test')

let randomPerson = Math.floor((Math.random()*82));
let starWarsURL = "https://swapi.dev/api/people/" + randomPerson;

fetch(starWarsURL).then(response => response.json()).then(json => {
    // console.log(json)
    personName.innerHTML = json.name;
    console.log(json.starships);
    console.log(json.height);

let heightBox = document.createElement('div');
heightBox.id = 'personHeight';
heightBox.innerHTML = json.height + ' cm';
personName.appendChild(heightBox);

let yearBox = document.createElement('div');
yearBox.id = 'yearBorn';
yearBox.innerHTML = json.birth_year;
personName.appendChild(yearBox);


let shipBox = document.createElement('div');
shipBox.id = 'personShip';
for(i=0; i<shipBox.length; i++){
    shipBox[i].innerHTML = json.starships;
    personHeight.appendChild(shipBox[i]);
}

});