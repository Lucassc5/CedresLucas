function buscarusuario() {
    const URL = 'https://randomuser.me/api/'
    fetch (URL)
        .then(res => res.json())
        .then(data => {

            const userInfo = document.getElementById('userInfo');
        
            let latitude= data.results[0].location.coordinates.latitude;
            let longitude= data.results[0].location.coordinates.longitude;

            userInfo.innerHTML= `
                <h1>Nombre y Apellido:</h1>
                <h2>${data.results[0].name.first} ${data.results[0].name.last}</h2>
                <img src="${data.results[0].picture.large}">
                <p><h1>Latitude:</h1> ${data.results[0].location.coordinates.latitude}</p>
                <p><h1>Longitude:</h1>${data.results[0].location.coordinates.longitude}</p>
            `;

            map(latitude,longitude);

            container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        } 
        })

        .catch(error => {
            document.getElementById('error').innerHTML = 
            `<p>${error}</p>`;
        });

}


function map(latitude,longitude) {

    var map = L.map('map').setView([latitude,longitude], 4);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude,longitude]).addTo(map);
} 