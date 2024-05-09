let valor1=[];
let valor2=[];

function buscarpersonaje1() {

    const num1 = document.getElementById('NumeroId1').value;

    if (valor1.length < 4) {
        if (valor1.length < 0 || valor1.length > 827) {
        alert('El numero ingresado es invalido');
        }
        else if (valor1.includes(num1)) {
        alert('Numero ya ingresado')  
        }
        else {
        valor1.push(num1);
        document.getElementById('NumeroId1').value = '';
        console.log(valor1) 
        }   
    }
    if (valor1.length == 3) {
        document.getElementById('NumeroId1').disabled = true;
        console.log(valor1)
    }
    
}

function buscarpersonaje2() {
    
    const num2 = document.getElementById('NumeroId2').value;

    if (valor2.length < 4) {
        if (valor2.length < 0 || valor2.length > 827) {
        alert('El numero ingresado es invalido');
        }
        else if (valor2.includes(num2)) {
        alert('Numero ya ingresado')  
        }
        else {
        valor2.push(num2);
        document.getElementById('NumeroId2').value = '';
        console.log(valor2)
    }
    }
    if (valor2.length == 3) {
        document.getElementById('NumeroId2').disabled = true;
        console.log(valor2)
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
}