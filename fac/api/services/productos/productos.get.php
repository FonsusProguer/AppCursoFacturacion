<?php
// Incluir el archivo de base de datos
include_once("../../classes/class.Database.php");

if( isset( $_GET["id"] ) ){
	
	$producto_id = $_GET["id"];
	
	$sql = "SELECT * FROM productos where producto_id = $producto_id";

	$producto =  Database::get_arreglo( $sql );
	if (count($producto) > 0) {
		$producto = $producto[0];
		$respuesta = array(
			'err' => false,
			'producto'=> $producto
		);
	}else
	{
		$respuesta = array(
			'err' => true,
			'mensaje'=> 'El producto no existe'
		);
	}
	
}else{
	$respuesta = array(
		'err' => true, 
		'mensaje'=> 'El producto no existe'
	);
}


echo json_encode( $respuesta, JSON_NUMERIC_CHECK );


?>