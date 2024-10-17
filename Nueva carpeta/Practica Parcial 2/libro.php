<?php

class Libro {

    public function __construct(public $titulo,
    public $autor,
    public $anio,
    public $genero,
    public $codigo){
    }

    public function getInformacion(){
        return  $this->titulo . '<br>' .
                $this->autor . '<br>' . 
                $this->anio . '<br>' . 
                $this->genero . '<br>' . 
                $this->codigo . '<br>';

        }
}

$libros = [
    new Libro ('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Novela', 001),
    new Libro ('1984', 'George Orwell', 1949, 'Distopía', 002),
    new Libro ('El Principito','Antoine de Saint-Exupéry', 1943, 'Fábula', 003),
    new Libro ('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Novela', 004),
    new Libro ('La sombra del viento', 'Carlos Ruiz Zafón', 2001, 'Novela', 005)
];

//foreach($libros as $libro){
//    $libro->getInformacion();
//}
?>