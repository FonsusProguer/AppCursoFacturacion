<?php  

include_once("../../classes/class.Database.php");

$postData = file_get_contents("php://input");
$request = json_decode($postData);
$request = (array)$request;

if (isset($request['id'])) {
    
    $sql = "UPDATE clientes 
            SET 
                nombre = '".$request['nombre']."',
                correo = '".$request['correo']."',
                zip = '".$request['zip']."',
                telefono1 = '".$request['telefono1']."',
                telefono2 = '".$request['telefono2']."',
                pais = '".$request['pais']."',
                direccion = '".$request['direccion']."' 
            WHERE id = ".$request['id'];

    $hecho = Database::ejecutar_idu( $sql );

    if (is_numeric($hecho) || $hecho === true ) {
        $respuesta = array
        (
            'err' => false,
            'Mensaje' => 'Registro actualizado'
        );
    }else
    { 
        $respuesta = array
        (
            'err' => false,
            'Mensaje' => $hecho
        );
    }

    echo json_encode($respuesta);
} else {
    $sql = "INSERT INTO clientes(
        nombre, 
        correo, 
        zip, 
        telefono1, 
        telefono2, 
        pais, 
        direccion) 
    VALUES (
        '".$request['nombre']."',
        '".$request['correo']."',
        '".$request['zip']."',
        '".$request['telefono1']."',
        '".$request['telefono2']."',
        '".$request['pais']."',
        '".$request['direccion']."')";
    
    $hecho = Database::ejecutar_idu( $sql );

    if (is_numeric($hecho) || $hecho === true ) {
        $respuesta = array
        (
            'err' => false,
            'Mensaje' => 'Registro insertado'
        );
    }else
    { 
        $respuesta = array
        (
            'err' => false,
            'Mensaje' => $hecho
        );
    }

    echo json_encode($respuesta);
}


?>