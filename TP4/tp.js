
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

        if (ingresarsaldo < 0) {
            throw new Error ('Ingresar valor mayor a 0'); 
        }
        if (ingresarsaldo > 1000) {
            throw new Error ('Te excediste rey'); 
        }

        console.log("Valor ingresado: ", ingresarsaldo);

        this.saldo += Number(ingresarsaldo);
        console.log("Saldo deposito: ", this.saldo)
        return this.saldo;    
    }


    retirar(retirarsaldo){   //solo si el saldo es suficiente

        if (retirarsaldo < 0 ) {
            throw new Error ('Ingresar valor mayor a 0'); 
        }
        if (retirarsaldo > this.saldo) {
            throw new Error ('Saldo insuficiente');  
        }

        this.saldo -= Number(retirarsaldo);
        console.log("saldo retirado: ", this.saldo)
        return  this.saldo;
    }

}



let cuenta1 = new Cuenta_Bancaria ('Lucas','Cedres',new Date (2002,8,25),10,1);

let nuevocliente = new Cliente ('Lucas','Cedres','2002');


const saldo = cuenta1.consultar();

function consaldo(){
    cuenta1.consultar();

    if (cuenta1.getedad() < 18) {
        alert('Debe tener al menos 18 años para tener una cuenta bancaria.');
        return; // no devuelve ningun valor
    }
    else {
    mostrar.innerHTML = `<p> El saldo actual es:  ${cuenta1.consultar()} </p>`
    }
}

function ingresar(){

   const ingresarsaldo = document.getElementById('ingresarsaldo').value;
   if (cuenta1.getedad() < 18) {
    alert('Debe tener al menos 18 años para tener una cuenta bancaria.');
    return;
}
   cuenta1.depositar(ingresarsaldo);

}

function retirar(){

    const retirarsaldo = document.getElementById('retirarsaldo').value;
    if (cuenta1.getedad() < 18) {
        alert('Debe tener al menos 18 años para tener una cuenta bancaria.');
        return;
    }
    cuenta1.retirar(retirarsaldo);

}