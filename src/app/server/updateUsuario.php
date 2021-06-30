<?php 
  require 'db.php';
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
   
  // REALIZA LA QUERY A LA DB
  mysqli_query($conn, "UPDATE usuario
    SET legajo='$params->legajo',
        pass='$params->pass',
        nombre='$params->nombre',
        apellido='$params->apellido',
        email='$params->email',
        dni='$params->dni',
        cellphone='$params->cellphone',
        localidad='$params->localidad',
        direccion='$params->direccion',
        cp='$params->cp',
        tipo='$params->tipo'

    WHERE legajo=$params->legajo");
    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL USUARIO SE ACTUALIZO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
  mysqli_close($conn);
?>