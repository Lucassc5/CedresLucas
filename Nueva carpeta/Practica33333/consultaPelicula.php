<?php
require_once 'Peliculas.php';

class Consultar{

    public function __construct(public array $pelicula){
    }

    public function buscarTitulo($nombre){
        $encontrado = false;
        foreach($this->pelicula as $pelicula){
            if ($pelicula->titulo == $nombre) {
                echo $pelicula->getInformacion();
                $encontrado = true;
                
            }
        }
        return $encontrado;
    }

    public function buscarDirector($nombre){
        $encontrado = false;
        foreach($this->pelicula as $pelicula){
            if ($pelicula->director == $nombre) {
                return $pelicula->getInformacion();
                $encontrado = true;
                
            }
        }
        return $encontrado;
    }
}

$nombre = $_POST['nombre'];

$consulta = new Consultar($peliculas);

if ($consulta->buscarTitulo($nombre) == true) {
        echo $consulta->buscarTitulo($nombre);
}
    if ($consulta->buscarDirector($nombre) == true) {
        echo $consulta->buscarDirector($nombre);
}


if ($consulta->buscarTitulo($nombre) == false) {
    if ($consulta->buscarDirector($nombre) == false) {
        echo "No se encontró ninguna película con el título o del director '$nombre'.";
    }
}