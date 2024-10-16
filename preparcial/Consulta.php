<?php


require_once "Libro.php";

    class Consulta extends Libro{
        public function __construct(public array $libros){
        }
        
            public function buscarTitulo($id){

                foreach ($this->libros as $libro) { 
                    
                    if ($libro->titulo == $id) {
                        echo $libro->getInformacion();
                    }
                }
            }

            public function buscarAutor($id){

                foreach ($this->libros as $libro) { 
                    
                    if ($libro->autor == $id) {
                        echo $libro->getInformacion();
                    }
                }
            }
    }