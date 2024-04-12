function Personajes(){
    const idapi = document.getElementById ("idapi").value;
    fetch(`https://rickandmortyapi.com/api/character/${idapi}`)
        .then (res => res.json())
        .then (data => {
                const infop = document.getElementById("infop");
 
            
            infop.innerHTML = `
            <div class = "box"> 
                <h2 class="texto">El nombre del personaje es </h2> 
                <h2 class="name">${data.name}</h2>
            </div> 

            <div class="imagen">
               <img src="${data.image}" alt="imagen"> 
            </div>
            `;
        })
        
        .catch (error => {
            console.error ('Error:',error);
        });
}







/*const personaje = {
    "id":140,
    "name":"Genital Washer",
    "status":"Alive",
    "species":"Human",
    "type":"",
    "gender":"Male",
    "origin":{
        "name":"Post-Apocalyptic Earth",
        "url":"https://rickandmortyapi.com/api/location/8"
    },
    "location":{
        "name":"Post-Apocalyptic Earth",
        "url":"https://rickandmortyapi.com/api/location/8"
    },
    "image":"https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode":[
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url":"https://rickandmortyapi.com/api/character/140",
    "created":"2017-12-27T18:47:44.566Z"

} */

//console.log (personaje);

 
//console.log (personaje.name);

/*    const jugador = {
    "nombre": "nahuel",
    "apellido": "barrios",
    "apodo" : "perrito",
    "edad" : "28",
    "clubes" : ['san lorenzo', "u. catolica"],
    "activo" : "true",
    "sueldo": "10000",
}

console.log (
    jugador.clubes [0],
    ) */

    // console.log ("El personaje ", personaje.name, "esta", personaje.status);

   // document.getElementById("result").innerHTML = "hola";
   //<div id ="personaje"> </div>
   //document.getElementById("personaje").innerHTML = "El personaje " + personaje.name + " esta " + personaje.status; 

