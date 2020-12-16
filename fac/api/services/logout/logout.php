<?php
session_start();

if (isset($_SESSION['user'])) {
    unset($_SESSION['user']);
    $respuesta = array(
        'err' => false,
        'url' => '../public/'
    );
}
echo json_encode($respuesta);
?>