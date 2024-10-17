<?php

class Pelicula{

    public function __construct(public $titulo, public $director, public $anio, public $genero, public $codigo){
    
    }

    public function getInformacion(){

        return $this->titulo. ', '. $this->director. ', '. $this->anio. ', '. $this->genero.', '. $this->codigo.'<br>';
    }
}

$peliculas = [
    new Pelicula ('Inception', 'Christopher Nolan', 2010, 'Ciencia Ficción', '001'),
    new Pelicula ( 'Titanic','James Cameron', 1997, 'Romance', '002'),
    new Pelicula ('Interstellar', 'Christopher Nolan', 2014,'Ciencia Ficción', '003'),
    new Pelicula ('La La Land','Damien Chazelle', 2016, 'Musical', '004'),
    new Pelicula ('El Padrino', 'Francis Ford Coppola', 1972, 'Drama', '005'),
];