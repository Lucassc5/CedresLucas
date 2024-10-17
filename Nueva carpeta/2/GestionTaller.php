<?php       
require_once "Trait.php"; 
require_once "Reparacion.php"; 
require_once "Vehiculo.php"; 

class GestionTaller {

    use CalculadoraCostos; //Trait

    private $reparaciones = []; //Instancia un array
    
    public function registrarReparacion($datos) { //funcion para registrar, le pasa como parametro los datos
        $reparacion = new Reparacion(             //Intancia un nueva reparacion
            $datos['matricula'],                  
            $datos['marca'],
            $datos['modelo'],
            $datos['cliente'],
            $datos['servicios'],
            date('Y-m-d'),
            0 
        );


        array_push($this->reparaciones, $reparacion);
        return "Reparación registrada con éxito.";     //Pushea o gurda en el array las reparaciones nuevas
    }
    
    public function buscarMatricula($matricula) {
      
    }
    
    public function buscarCliente($cliente) {
  
    }


    public function getReparaciones() {     
        return $this->reparaciones;
    }
}

$gestorTaller = new GestionTaller();    //Declara una nueva instancia de gestionTaller()

$gestorTaller->registrarReparacion($_POST);     

foreach ($gestorTaller->getReparaciones() as $reparacion) {
   echo $reparacion->getInformacion();      //Inforamcion del cliente
   echo "<br>";
   echo $reparacion->getDetallesReparacion();   //Informacion de las reparaciones.
}
?>