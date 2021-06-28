<?php
require 'db.php';

header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  ; // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB



  // REALIZA LA QUERY A LA DB
  mysqli_query($conn, "INSERT INTO usuario(legajo, pass, nombre, apellido, email, dni, cellphone, localidad, direccion, cp, tipo) VALUES
                  ('$params->legajo', $params->pass, '$params->nombre', '$params->apellido', '$params->email', '$params->dni', '$params->cellphone'
                  , '$params->localidad', '$params->direccion', '$params->cp', '$params->tipo')");    
  

  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
  mysqli_close($conn);

?>