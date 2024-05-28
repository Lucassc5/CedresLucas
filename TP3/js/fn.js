let valor1=[];
let valor2=[];
const menor = 1;
const mayor = 826;


function buscarpersonaje1() {

    const NumeroId1 = document.getElementById('NumeroId1').value;

    
    if (NumeroId1 >= menor && NumeroId1 <= mayor) {

        if (valor1.includes(NumeroId1)) {
        alert('Variable ya ingresada')   
        }
        else {valor1.push(NumeroId1)
        }
         
        if (valor1.length == 3) {
        document.getElementById('NumeroId1').disabled = true;
        alert('Se ingresaron los 3 numeros')
        }
        console.log('Los valores del array 1 son: ' +valor1);
    }
    else {
        alert('No es valido')
    }
}

function buscarpersonaje2() {
    
    const NumeroId2 = document.getElementById('NumeroId2').value;

    if (NumeroId2 >= menor && NumeroId2 <= mayor) {

        if (valor2.includes(NumeroId2)) {
        alert('Variable ya ingresada')   
        }
        else {valor2.push(NumeroId2)
        }       
        if (valor2.length == 3) {
        document.getElementById('NumeroId2').disabled = true;
        alert('Se ingresaron los 3 numeros')
        }
        console.log('Los valores del array 2 son: ' +valor2);
    }


    if (valor1.length == 3 && valor2.length == 3) {
        mostrarpersonajes()
    }
    
}

function mostrarpersonajes() {

let personajes = valor1.concat(valor2)

fetch (`https://rickandmortyapi.com/api/character/${personajes}`)
.then(res => res.json())
.then(data => {

    console.log(data)

    for (let i = 0; i < personajes.length; i++) {
        for (let j = 0; j < personajes.length; j++) {    
        if (data[i].id == valor1[j]) {

        rym1.innerHTML += `
        <img src="${data[i].image}">
        ` ;     
        } 
    }
    }


    for (let i = 0; i < personajes.length; i++) {
        for (let j = 0; j < personajes.length; j++) {
        if (data[i].id == valor2[j]) {
           
        rym2.innerHTML += `
        <img src="${data[i].image}">
        ` ;      
        }
    }        
    }
    })

    .catch(error => {
        document.getElementById('error').innerHTML = 
        `<p>${error}</p>`;
    });

}