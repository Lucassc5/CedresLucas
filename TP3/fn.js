function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <p><h1>Nombre:</h1> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p><h1>Género:</h1> ${user.gender}</p>
                <p><h1>coordinates:</h1> ${user.coordinates},${user.coordinates}</p>
                
            `;
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => {
            console.error('Error', error);
        });  
}