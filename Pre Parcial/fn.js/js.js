function mostrarrym() {
    fetch(`https://rickandmortyapi.com/api/character/566,67,50`)
    .then(Response => Response.json())
    .then(data => {
        
    const array = [];

    data.forEach(personaje => {
    array.push(personaje.name);
    
    let arrayordenado = array.sort();
    console.log("array ordenado por abcedario: " + arrayordenado)
    mostrarmayor.innerHTML = `
    <p>${arrayordenado[2]}</p>
    `
    });
    })
}


function mostrarrandom(){
    fetch(`https://randomuser.me/api/?results=3`)
    .then (res => res.json())
    .then (data => {
    
    var mayor = 0;    
    var array = [];

    for (let i = 0; i < 3; i++) {
        array.push(data.results[i].dob.age);
        console.log(array[i]);
    
        for (let i = 0; i < 3; i++) {

            if (array[i] > mayor) {
            mayor = array[i];
            }
        }
        mostrarmayoredad.innerHTML = `
        <p>La persona de mayor edad tiene: ${mayor}</p>
        `
    }
})
}