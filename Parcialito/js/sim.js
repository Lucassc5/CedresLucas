//poner foto de la persona de mayor edad de la api de internet
//mostrar edad de apii internet

let urlapi = 'https://randomuser.me/api/?results=10';
let urljson = 'personas.json';


function buscar(){
//const buscarinternet = document.getElementById('internet').checked;
const buscarlocal = document.getElementById('local').checked;

    if (buscarlocal) {
        url = urljson;
    }else{
        url = urlapi;
        
    }    

    fetch(url)
    .then(res => res.json())
    .then(data => {
    
    //console.log("Datos de las personas: ", data);
    
    let female = [''];
    let male = [''];
    let mayor = 0;
    let mayores = [];
    mostrarimagen.innerHTML = '';
    mostrarFemale.innerHTML = '';
    mostrarMale.innerHTML = '';

    data.results.forEach(element => {
        //console.log("Datos en foreach: ",element)

        if (element.gender === 'female') {
        female.push(element.name.first + " " + element.name.last + " " + element.dob.age)
        console.log("female: ",female)  
        }

        if (element.gender === 'male') {
        male.push(element.name.first + " " + element.name.last + " " + element.dob.age)
        console.log("male: ",male)
        }

        if (element.dob.age > mayor) {
        mayor = element.dob.age;
        mayores = [element]
        console.log("El mayor es: " + mayor)
        }else if (element.dob.age === mayor) { //comparar si hay mas de un mayor.
        mayores.push(element) //guardo todos los mayores.
        }
    });

    mayores.forEach(element => {
    mostrarimagen.innerHTML += `
    <p> La persona de mayor edad es: ${element.dob.age}</p>
    <img src='${element.picture.large}'>
    `    
    })
    



    mostrarFemale.innerHTML = `<h3> Female: </h3>`
    for ( i= 1; i < female.length; i++) {
        
        mostrarFemale.innerHTML += `
        <p> Nombre y apelido: ${female[i]}</p>
        `    
    }

    mostrarMale.innerHTML = `<h3> Male: </h3>`
    for ( i= 1; i < male.length; i++) {
        
        mostrarMale.innerHTML += `
        <p> Nombre y apelido: ${male[i]}</p>
        `    
    }
})
}

