function SearchUser() {
    let urluser = 'https://randomuser.me/api/';
    fetch(urluser)
        .then(res => res.json())
        .then(data => {
            
            const userInfo = `
                <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
                <img src="${data.results[0].picture.large}">
                <h1>Latitude</h1> 
                <p>${data.results[0].location.coordinates.latitude}</p>
                <h1>Longitude</h1>
                <p>${data.results[0].location.coordinates.longitude}</p>   
            `;
            document.getElementById('user-info').innerHTML = userInfo;
            
            map(latitude, longitude);

            const latitude = data.results[0].location.coordinates.latitude;
            const longitude = data.results[o].location.coordinates.longitude;

            /* container = L.DomUti.get('map');
                if (contein != null) {
                    container.leaflet_id = null;
                } */

        })
}


function map(latitude,longitude) {
    var map = L.map('map').setView([latitude,longitude], 5);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude,longitude]).addTo(map);
}