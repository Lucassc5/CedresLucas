let val =[];

function buscarmayor() {
    let valor= document.getElementById('numId').value;

    val.push(valor);
    console.log(val)

    if (val.length ==10) {
        let numeroMax = val[0]; 
    
        alert('10 numeros ingresados');

        for (i=1; i < val.length; i++){
            if (val[i] > numeroMax) {
                numeroMax= val[i];
            } 
        } 
        console.log(numeroMax);
    }
}

function buscarpersonaje() {
    URL ('https://rickandmortyapi.com/api/character/')
    fetch (URL)
    .then(res => res.json())
    .then(data => {

        const persona = Document.getElementById('infop');


    })
}