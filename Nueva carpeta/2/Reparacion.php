<?php

require_once "Vehiculo.php"; 

class Reparacion extends Vehiculo {
    
    public function __construct($matricula, $marca, $modelo, $cliente, public $tipoServicio, public $fecha, public $costo) {
        parent::__construct($matricula, $marca, $modelo, $cliente);
    }

    public function getDetallesReparacion() {
        return $this->tipoServicio . ' ' .$this->fecha . ' ' .$this->costo .'<br>';
    }

}