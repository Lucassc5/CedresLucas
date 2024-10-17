<?php

require_once "Libro.php";
require_once "consulta.php";

$id = $_POST['id'];

$consulta = new Consulta($libros);
echo $consulta->buscarTitulo($id);
echo $consulta->buscarAutor($id);

?>