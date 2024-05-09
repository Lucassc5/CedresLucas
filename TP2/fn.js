function Personajes() {
    const idp1 = document.getElementById('idp1').value;
    const idp2 = document.getElementById('idp2').value;
    fetch(`https://rickandmortyapi.com/api/character/${idp1},${idp2}`)
        .then (res => res.json())
        .then (data => {

            const dato1= data[0];
            const dato2= data[1]; 

            console.log (data.res); 

            const infop1 = document.getElementById('infop1');
            infop1.innerHTML = `
                <h2>${dato1.name}</h2>
                <p>Genero: ${dato1.gender}</p>
                <img src="${dato1.image}" alt="${dato1.name}">
            `;
            let gen1 = (dato1.gender); 


            const infop2 = document.getElementById('infop2');
            infop2.innerHTML = `
                <h2>${dato2.name}</h2>
                <p>Genero:${dato2.gender}</p>
                <img src="${dato2.image}" alt="${dato2.name}">
            `;
            let gen2 = (dato2.gender);



            const genero = document.getElementById('genero');
        
            if (gen1 == gen2){
            igenero.innerHTML = '<img src= "correcto.png">';    
            } 
            else {
            igenero.innerHTML= '<img src= "incorrecto.png">';
            }  


        })

        .catch (error => {
            console.error ('Error:',error);
        });
}       