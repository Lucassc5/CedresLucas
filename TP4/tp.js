
class Cliente{
constructor(nombre,apellido,fecha_nacimiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
}

getedad(){

    const fecha = new Date();

    const anoActual = fecha.getFullYear();
    const mesActual = fecha.getMonth() + 1; 
    const diaActual = fecha.getDate();

    const edad = anoActual - this.fecha_nacimiento.getFullYear();
    
        if (mesActual < this.fecha_nacimiento.getMonth() + 1 || 
            (mesActual === this.fecha_nacimiento.getMonth() + 1 &&
             diaActual < this.fecha_nacimiento.getDate())) 
             {

             edad -1;
        }

        return edad;

}
}

class Cuenta_Bancaria extends Cliente{
constructor(nombre, apellido, fecha_nacimiento, saldo, num_cuenta){
    super(nombre,apellido,fecha_nacimiento);
    this.saldo = saldo;
    this.num_cuenta = num_cuenta;
}

    consultar(){

        console.log('su saldo es: ',this.saldo)
        return this.saldo;

    }

    depositar(ingresarsaldo){  //hasta $1000

        if (ingresarsaldo <= 0) {
            return alert ('Ingresar valor mayor a 0'); 
            //throw new Error ('Ingresar valor mayor a 0'); 

        }
        if (ingresarsaldo >= 1000) {
            return alert ('Te excediste rey'); 
            //throw new Error ('Te excediste rey'); 
        }

        console.log("Valor ingresado: ", ingresarsaldo);

        this.saldo += Number(ingresarsaldo);
        console.log("Saldo deposito: ", this.saldo)
        return this.saldo;    
    }


    retirar(retirarsaldo){   //solo si el saldo es suficiente

        if (retirarsaldo < 0 ) {
            return alert ('Ingresar valor mayor a 0');
            //throw new Error ('Ingresar valor mayor a 0'); 
        }
        if (retirarsaldo > this.saldo) {
            return alert ('Saldo insuficiente rey');
            //throw new Error ('Saldo insuficiente');  
        }

        this.saldo -= Number(retirarsaldo);
        console.log("saldo retirado: ", this.saldo)
        return  this.saldo;
    }
}

const nuevocliente = new Cliente (nombre, apellido, new Date (fecha_nacimiento),10,1);

function enviardatos(){

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;

    let cuenta1 = new Cuenta_Bancaria (nombre, apellido, new Date(fecha_nacimiento),10,1);

    console.log(nombre, apellido, fecha_nacimiento);   
    
    if (cuenta1.getedad() < 18) {
        return alert('Debe tener al menos 18 años para tener una cuenta bancaria.');
    }
    if (fecha_nacimiento || nombre || apellido  == '') {
        return alert('Por favor, complete todos los campos.'); // Detener la ejecución de la función si faltan datos
    }
    else {
        document.getElementById('boxes').style.display = 'block';
        document.getElementById('cliente').style.display = 'none';
    }
}

const cuenta1 = new Cuenta_Bancaria (nombre, apellido, new Date (fecha_nacimiento),10,1);


function consaldo(){
    cuenta1.consultar();
    mostrar.innerHTML = `<p> El saldo actual es:  ${cuenta1.consultar()} </p>`
    
}

function ingresar(){

   const ingresarsaldo = document.getElementById('ingresarsaldo').value;
   cuenta1.depositar(ingresarsaldo);
}

function retirar(){

    const retirarsaldo = document.getElementById('retirarsaldo').value;
    cuenta1.retirar(retirarsaldo);
}