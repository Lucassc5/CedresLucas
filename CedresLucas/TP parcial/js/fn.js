let val =[];

function buscarmayor() {

    val.push(Number(document.getElementById('numId').value));
    document.getElementById('numId').value = '';
    console.log(val)

    if (val.length ==10) {
        let numeroMax = val[0]; 
    
        alert('10 numeros ingresados');

        for (i=1; i < val.length; i++){
            if (val[i] > numeroMax) {
                numeroMax= val[i];
            } 
        } 
        console.log('Numero max:', numeroMax);
        buscarpersonaje(numeroMax);
    }

}

function buscarpersonaje(numeroMax) {

    fetch (`https://rickandmortyapi.com/api/character/${numeroMax}`)
    .then(res => res.json())
    .then(datarym => {

        console.log(datarym)

    fetch (`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(dataru => {

        console.log(dataru)

        if (datarym.species == 'Human') {
            
            const rymp = document.getElementById('rymp');
            
            rymp.innerHTML= `
            <img src="${datarym.image}">
            
            <img src="${dataru.results[0].picture.large}">
            `;
        }

        if (datarym.species != 'Human') {
            
            const rymp = document.getElementById('rymp');

            rymp.innerHTML= `
            <img src="${dataru.results[0].picture.large}">
            <p>${dataru.results[0].name.first}</p>
            <p>${dataru.results[0].name.last}</p>
            <p>${dataru.results[0].email}</p>
            <p>${dataru.results[0].age}</p>
            `;
        }

    })


    .catch (error => {
        document.getElementById('error').innerHTML= `
        <p>${error}</p>
        `;
        
    });    

    })
}