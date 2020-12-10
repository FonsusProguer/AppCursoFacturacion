<?php  

include_once("../../classes/class.Database.php");

$respuesta = Database::get_todo_paginado('clientes');

echo json_encode($respuesta);

?>