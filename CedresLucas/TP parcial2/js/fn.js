let valor1=[];
let valor2=[];

function buscarpersonaje1() {

    const num1 = document.getElementById('NumeroId1').value;

    if (valor1.length <4) {
        valor1.push(num1)
        document.getElementById('NumeroId1').value = '';
        console.log(valor1)    
    }

    if (valor1.length == 3) {
        document.getElementById('NumeroId1').disabled = true;
    console.log(valor1)
    }

    mostrarpersonajes();
}



function mostrarpersonajes() {

fetch (`https://rickandmortyapi.com/api/character/` + personaje1)
.then(res => res.json())
.then(data => {

const rym1 = document.getElementById('rym1');
rym1.innerHTML= `
<img src="${data[0].image}">
<img src="${data[1].image}">
<img src="${data[2].image}">
` 
})
}