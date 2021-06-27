<?php
$hostName = 'localhost';        // donde esta la bd
$nombreUsuario = 'root';
$contraseña = '';
$bdName = 'pps_db';
$conn = mysqli_connect($hostName, $nombreUsuario, $contraseña, $bdName); // creo una conexion con un servidor sql

if(isset($conn)){
    echo 'La BD esta conectada !';
}

?>