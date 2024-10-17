<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcialito 2</title>
</head>
<body>
    <h2> Parcialito 2 </h2>

<tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>DNI</th>
    <th>Edad</th>
    <th>Email</th>
    <th>Materia</th>
    <th>Notas</th>
</tr>


<?php 

foreach ($alumnos as $alumno): 

?>


<tr>
    <td> <?= $alumno->id;?> </td>
    <td> <?= $alumno->nombre;?> </td>
    <td> <?= $alumno->apellido;?> </td>
    <td> <?= $alumno->dni;?> </td>
    <td> <?= $alumno->edad;?> </td>
    <td> <?= $alumno->email;?> </td>
    <td> <?= $alumno->materia;?> </td>
    <td> <?= $alumno->notas;?> </td>
</tr>
    
<td>
<button onclick="verNotas(<?= $alumno->id; ?>, '<?= $alumno->nombre; ?>', '<?= $alumno->apellido; ?>', <?= json_encode($alumno->getNotas()); ?>, '<?= $alumno->materia; ?>', <?= $alumno->edad; ?>)">Mostrar Notas</button>
</td> <button onclick="verEmail(<?= $alumno->id; ?>, '<?= $alumno->nombre; ?>', '<?= $alumno->apellido; ?>', '<?= $alumno->getEmail(); ?>')">Notificar</button>

<?php endforeach; ?>


<script src="fn.js"></script>

</body>
</html>