<?php

require_once "Libro.php";
require_once "Consulta.php";

$id = $_POST['id'];


    $consulta = new Consulta($libros);
    echo $consulta->buscarTitulo($id);
    echo $consulta->buscarAutor($id);

