class Persona {
    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.fecha_nacimiento = fecha_nacimiento;
    }

    saludar (){
        console.log('Hola soy ' + this.nombre + this.apellido)
    }
        
}

class Cliente extends Persona {

    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento,cuenta){
        super(nombre,apellido,dni,nacionalidad,fecha_nacimiento);

        this.cuenta = cuenta; 
    }
}

let lucas = new Cliente ('Lucas','Cedres',44151438,'Argentino','25/08/2002',10);
lucas.saludar();
console.log(lucas);

/* sin cosntructor:
    lucas.nombre = 'Lucas';
    lucas.apellido = 'Cedres';
    lucas.dni = '44151438';
    lucas.nacionalidad = 'arg';
    lucas.nacimiento = '25/08/2002';
    lucas.cuenta = '10';
*/


