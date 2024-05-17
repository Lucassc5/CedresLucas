class Persona {
    
    constructor(nombre,apellido,fecha_nacimiento){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }

    getedad(){
        let anio = new Date ();
        let edad = anio.getFullYear() - (this.fecha_nacimiento);
        return (edad);
    }

}

lucas = new Persona ('Lucas','Cedres',2002)

let edad = lucas.getedad();
console.log(`${lucas.nombre} ` + edad);