<?php
// Incluir el archivo de base de datos
include_once("../../classes/class.Database.php");

	$sql = "SELECT count(*) AS totalFacturas FROM facturas";
    $totalFacturas =  Database::get_row( $sql );


    $respuesta = array(
        'err' => true,
        'totalFacturas'=> $totalFacturas['totalFacturas']
    );

echo json_encode( $respuesta, JSON_NUMERIC_CHECK );


?>