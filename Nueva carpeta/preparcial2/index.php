<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content=" placeholderth=decontentvice- plplaceholderthaceholderth, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="GestionTaller.php" method="post">

        <input type="text" name="matricula" placeholder="matricula">
        <br>
        <input type="text" name="marca" placeholder="marca">
        <br>
        <input type="text" name="modelo" placeholder="modelo">
        <br>
        <input type="text" name="cliente" placeholder="cliente">
        <br>
        <select name="servicios">
            <option value="Cambio de aceite">Cambio de aceite</option>
            <option value="Revision general">Revision general</option>
            <option value="Reparacion de moto">Reparacion de moto</option>
        </select>
        <br>
        <input type="submit" value="Registrar">

    </form>

</body>
</html>