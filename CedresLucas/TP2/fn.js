function Personajes() {
    const idp1 = document.getElementById('idp1').value;
    const idp2 = document.getElementById('idp2').value;
    fetch(`https://rickandmortyapi.com/api/character/${idp1},${idp2}`)
        .then (res => res.json())
        .then (data => {

            console.log (data.res);
            
            if (idp1 == idp2){
                let dato1= data[0];
                const infop1 = document.getElementById('infop1');
                infop1.innerHTML = `
                    <h2>${dato1.name}</h2>
                    <p>Genero: ${dato1.gender}</p>
                    <img src="${dato1.image}" alt="${dato1.name}">
                `;
    
                const infop2 = document.getElementById('infop2');
                
                let dato2 = data[0]; 
                infop2.innerHTML = `
                    <h2>${dato2.name}</h2>
                    <p>Genero:${dato2.gender}</p>
                    <img src="${dato2.image}" alt="${dato2.name}">
                `;

            } else {

                let dato1= data[0];

                const infop1= document.getElementById("infop1");
                infop1.innerHTML = `
                <h2>${dato1.name}</h2>
                <p>Genero: ${dato1.gender}</p>
                <img src="${dato1.image}" alt="${dato1.name}">
                `;

                let dato2 = data[1];

                const infop2 = document.getElementById("infop2");
                infop2.innerHTML = `
                <h2>${dato2.name}</h2>
                <p>Genero:${dato2.gender}</p>
                <img src="${dato2.image}" alt="${dato2.name}">
                `;
            }
            if (data1.gender == data2.gender){
                const igenero = document.getElementById("igenero");
                igenero.innerHTML= `
                <h2> Match</h2>
                `
            }

            if (data[0].gender == data[1].gender){
                const igenero = document.getElementById("igenero");
                igenero.innerHTML= `
                <h2> Match</h2>
                `
            }else {
                const igenero = document.getElementById("igenero");
                igenero.innerHTML= `
                <h2> No match</h2>
                `

            }

        })

        .catch (error => {
            console.error ('Error:',error);
        });
}       