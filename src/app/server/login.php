<?php
require 'db.php';
header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$legajo = $_POST["legajo"];
$password = $_POST["password"];




$result = mysqli_query($conn, "SELECT * FROM usuario WHERE legajo=$_POST[legajo]" );

$row = mysqli_fetch_assoc($result);
$legajoC = $row['legajo'];
$passwordC = $row['pass'];

if ($legajo === $legajoC && $password === $passwordC ){
    session_start();
    $_SESSION['legajo'] = $legajo;
    $json = json_encode($row);
}
else {
    $json = 'No hay nada';
}
header('Content-Type: application/json');
    echo $json;
mysqli_close($conn);
?>
