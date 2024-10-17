<?php

class Alumno {

    public $id;
    public $nombre;
    public $apellido;
    public $dni;
    public $edad;
    public $email;
    public $materia;
    public $notas;
    
    public function __construct($id, $nombre, $apellido, $dni, $edad, $email, $materia, $notas){
        
        $this->id;
        $this->nombre;
        $this->apellido;
        $this->dni;
        $this->edad;     
        $this->email;     
        $this->materia;
        $this->notas;

    }

    public function getNotas(){
        return $this->notas;
    }

    public function getEmail(){
        return $this->email;
    }
}

    $alumnos = [
        new Alumno(1, 'Lucas', 'Cedres', '12345678', 22, 'lucas@mail.com', 'programacion',[9, 7, 7]),
        new Alumno(2, 'Ana', 'Gonzalez', '23456789',21, 'ana.gonzalez@mail.com', 'Historia', [10, 9, 10]),
        new Alumno(3, 'Pedro', 'Rodriguez', '34567890',23, 'pedro.rodriguez@mail.com', 'Física', [6, 7, 8]),
        new Alumno(4, 'Maria', 'Fernandez', '45678901',24, 'maria.fernandez@mail.com', 'Química', [9, 8, 10]),
        new Alumno(5, 'Luis', 'Garcia', '56789012',25, 'luis.garcia@mail.com', 'Lengua', [7, 6, 8])
    ];
    
?>