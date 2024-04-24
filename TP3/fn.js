function buscarusuario() {
    const URL = 'https://randomuser.me/api/'
    fetch (URL)
        .then(res => res.json())
        .then(data => {

            const userInfo = document.getElementById('userInfo');
            console.log(data);

            userInfo.innerHTML= `
                <p><h1>Nombre:</h1>${data.results[0].name.first} ${data.results[0].name.last}</p>
                <img src="${data.results[0].picture.large}">
                <p><h1>Latitude:</h1> ${data.results[0].location.coordinates.latitude}</p>
                <p><h1>Longitude:</h1>${data.results[0].location.coordinates.longitude}</p>
            `;
            map(data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude);
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => {
            console.error('Error', error);
        });
}


function map(latitude,longitude) {

    var map = L.map('map').setView([latitude,longitude], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
} 