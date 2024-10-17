<?php

class Reparacion extends Vehiculo{

    public function __construct(public $tipoServicio, public $fecha, public $costo){

    }

    public function getDetallesReparacion(){
        return $this->tipoServicio . ' ' .$this->fecha . ' ' .$this->costo .'<br>';
    }

}