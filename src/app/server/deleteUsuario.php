<?php 
require 'db.php';
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conn, "DELETE FROM usuario WHERE legajo=$_GET[legajo]");
    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL USUARIO SE ELIMINO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
  mysqli_close($conn);
?>