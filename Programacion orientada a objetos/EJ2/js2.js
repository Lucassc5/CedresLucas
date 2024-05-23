//boton buscar, pedir api, instanciamos pesona y mostramos los datos de persona

function buscarpersonaje(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {     

        
        /*let person = new Persona(
            data.results[0].name.first, 
            data.results[0].name.last, 
            data.results[0].gender, 
            data.results[0].location.city, 
            data.results[0].email,
            data.results[0].dob.age
        )*/

            //console.log(person)

            /*if (getedad < 50) {
                var cliente =  new Persona(
                    data.results[0].name.first, 
                    data.results[0].name.last, 
                    data.results[0].gender, 
                    data.results[0].location.city, 
                    data.results[0].email,
                    data.results[0].dob.date,
                    data.results[0].location.number)
                //console.log(cliente, 'Es cliente')
            } else {
                var empleado =  new Persona(
                    data.results[0].name.first, 
                    data.results[0].name.last, 
                    data.results[0].gender, 
                    data.results[0].location.city, 
                    data.results[0].email,
                    data.results[0].dob.date,
                    data.results[0].location.postcode)
                console.log(empleado,'Es empleado')
            }*/

            const dato = data.results[0];
            const persona = new Persona(dato.name.first, dato.name.last, dato.gender, dato.location.city , dato.email, dato.dob.date)
            console.log(persona)
            persona.getedad()
    }
    )
    
}


class Persona {
    constructor (name,lastname,gender,city,email,fechaNacimiento){
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.city = city;
        this.email = email;
        this.fechaNacimiento = new Date(fechaNacimiento);
       
        //calcular edad, con la fecha de nacimiento que te da la api

    }
    
    getedad(){
        const fecha = new Date();
        const anio = fecha.getFullYear();
        const mes = fecha.getMonth();
        const dia = fecha.getDate();

        const anionac = this.fechaNacimiento.getFullYear();
        const mesnac = this.fechaNacimiento.getMonth();
        const dianac = this.fechaNacimiento.getDate();

        const edad = anio-anionac;
        
        return mostrar.innerHTML= `
        <h3>La edad de ${this.name} ${this.lastName} es ${edad}</h3>
        ` 
    }
}

class Cliente extends Persona{
constructor(name,lastname,gender,city,email,date,cuenta){
    super(name,lastname,gender,city,email,date);

    this.cuenta = cuenta;

}
}

class Empleado extends Persona{
    constructor(name,lastname,gender,city,email,date,legajo){
        super(name,lastname,gender,city,email,date);
    
        this.legajo = legajo;
    }
}


