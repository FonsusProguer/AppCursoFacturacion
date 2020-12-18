<?php  

include_once("../../classes/class.Database.php");

$pagina = 1;
if (isset($_GET['p'])) {
    $pagina = $_GET['p'];
}

$respuesta = Database::get_todo_paginado('facturas', $pagina);

echo json_encode($respuesta);

?>