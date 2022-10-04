//console.log('test')

let randomPerson = Math.floor((Math.random()*82)+1);
let starWarsURL = "https://swapi.dev/api/people/" + randomPerson;

fetch(starWarsURL).then(response => response.json()).then(json => {
    // console.log(json)

    personName.innerHTML = json.name;
    personHeight.innerHTML = json.height + ' cm';
    haircolor.innerHTML = json.hair_color;
   
});
