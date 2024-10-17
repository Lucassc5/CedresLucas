<?php

    class Vehiculo{

        public function __construct(public $matricula, public $marca, public $modelo, public $cliente){            
        }

        public function getInformacion(){
            return $this->matricula." ".$this->marca." ".$this->modelo." ".$this->cliente;
        }
    }