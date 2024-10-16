<?php       
    require_once "Trait.php"; 

    class GestionTaller{
        use CalculadoraCostos;
        private $reparaciones = []; 


        public function registrarReparacion($datos){
            $this->reparaciones[] = $datos;
        }
        
        public function buscarMatricula($matricula){
            foreach ($this->matricula as $matriculaEncontrada) {
                if () {
                    
                }
            }
        }
        
        public function buscarCLiente($cliente){
        }


    }

    
    $datos=
    $datos= new GestionTaller();
    
    $datos->registrarReparacion($_POST);

    var_dump($datos);
