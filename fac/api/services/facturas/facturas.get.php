<?php
// Incluir el archivo de base de datos
include_once("../../classes/class.Database.php");

if( isset( $_GET["p"] ) ){
	
	$facturaId = $_GET["p"];
	
	$sql = "SELECT * FROM facturas where numero_factura = $facturaId";
    $factura =  Database::get_row( $sql );

    if (count($factura) > 0) {
        $clienteId = $factura['cliente_id'];

        $sqlCliente = "SELECT * FROM clientes where id = ".$clienteId;
        $cliente =  Database::get_row( $sqlCliente );

        $sqlDetalle = "SELECT facd.cantidad, pro.producto_id, pro.precio_venta, pro.producto 
            FROM facturas_detalle facd
            INNER JOIN  productos pro ON  facd.producto_id = pro.producto_id
            where facd.numero_factura = ".$facturaId;
        $detalle =  Database::get_arreglo( $sqlDetalle );

		$respuesta = array(
			'err' => false,
            'factura'=> $factura,
            'cliente' => $cliente,
            'detalle' => $detalle
		);
	}else
	{
		$respuesta = array(
			'err' => true,
			'mensaje'=> 'La factura no existe'
		);
	}
	
}else{
	$respuesta = array(
		'err' => true, 
		'mensaje'=> 'La factura no existe'
	);
}


echo json_encode( $respuesta, JSON_NUMERIC_CHECK );


?>