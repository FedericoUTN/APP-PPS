<?php 
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  require 'db.php';
   // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB



  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conn, "SELECT * FROM usuario");
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[] = $resultado;
  };
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  mysqli_close($conn);
  echo $json; // MUESTRA EL JSON GENERADO
  
  
 
?>