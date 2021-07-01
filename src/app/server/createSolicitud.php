<?php
require 'db.php';

header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  ; // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB



  // REALIZA LA QUERY A LA DB
  mysqli_query($conn, "INSERT INTO solicitudinicio(fechaincial, caracteristicas, docentetutor) VALUES
                  ('$params->fechaIncial', '$params->caracteristicas', '$params->docenteTutor')");    
  

  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE LA SOLICITUD';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
  mysqli_close($conn);

?>