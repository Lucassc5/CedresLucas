/*
Mostrar 
Name: RYM
Age: RU
Gender: RYM
City: RU
*/ 



const error = navigator.onLine;

function mostrar() {
    if (error) {
        
        fetch(`https://rickandmortyapi.com/api/character/566,50,67`)
        .then(Response => Response.json())
        .then(datarym => {

            fetch(`https://randomuser.me/api/?results=3`)
            .then (res => res.json())
            .then (dataru => {

            var mayor = 0;    
            var arrayru = [];

                for (let i = 0; i < 3; i++) {
                    console.log(dataru.results[i].dob.age)

                    if (dataru.results[i].dob.age >= mayor) {

                    mayor = dataru.results[i].dob.age;

                    arrayru[0] = dataru.results[i];
                    }
                }
                mostrarmayoredad.innerHTML = `
                <h1>La persona de mayor edad tiene: ${mayor}</h1>
                `
                    const array = [];
                    const arrayRYM = [];

                    for (let i = 0; i < 3; i++) {

                        array.push(datarym[i].name)

                        array.sort();   

                        arrayRYM[0] = datarym[i];

                    }
                    console.log("array ordenado por abcedario: " + array)
                    console.log("datos del mayor ",arrayRYM);
                       
                    mostrarmayor.innerHTML = `
                    <h1>${array[2]}</h1>
                    ` 

                    mostrarPjs(arrayru, arrayRYM)
            })         
        })   
    }else{
        alert("No estas conectado a internet")
        mostrarerror.innerHTML = `
        <h1>No estas conectado a internet putita</h1>`
    }
}


function mostrarPjs(arrayru, arrayRYM) {

    pjRM.innerHTML = `
    <p> name: ${arrayRYM[0].name}</p>
    <p> gender: ${arrayRYM[0].gender}</p>
    `
    
    pjRU.innerHTML = `
    <p> age: ${arrayru[0].dob.age}</p>
    <p> city: ${arrayru[0].location.city}</p>
    `
}



/*.catch(error => {console.error('Error ', error.message)
            document.getElementById("error").innerHTML = [error.message]});*/