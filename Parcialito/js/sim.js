function buscar(){
    fetch('personas.json')  
    .then(res => res.json())
    .then(data => {
    
    //console.log("Datos de las personas: ", data);
    let female = [''];
    let male = [''];

    data.results.forEach(element => {
        //console.log("Datos en foreach: ",element)

        if (element.gender === 'female') {
        female.push(element.name.first + " " + element.name.last)
        console.log("female: ",female)  
        }

        if (element.gender === 'male') {
        male.push(element.name.first + " " + element.name.last)
        console.log("male: ",male)
        }
    });


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

