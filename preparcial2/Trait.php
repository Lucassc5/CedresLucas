<?php     

    trait CalculadoraCostos{
        public function CalcularCostoTotal($horasTrabajo, $costoMateriales){
        return $horasTrabajo * $costoMateriales;
        }
    }
