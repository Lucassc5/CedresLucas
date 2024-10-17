<?php

require_once 'Libro.php';


Class Consulta extends Libro{

    public function __construct(public array $libros){
    }


    public function buscarTitulo($id){

        foreach ($this->libros as $libro){

            if ($libro->titulo == $id) {
                echo $libro->gerInformacion();
            } 
        } 
    }

    public function buscarAutor($id){

        foreach ($this->libros as $libro){

            if ($libro->autor == $id) {
                echo $libro->gerInformacion();
            } 
        } 
    }
}

$id = $_POST['id'];

$consulta = new Consulta($libros);

$tituloEncontrado = $consulta->buscarTitulo($id);
$autorEncontrado = $consulta->buscarAutor($id);