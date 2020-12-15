let mainController = angular.module('facturacionApp.mainController', []);

mainController.controller('mainController' , 
[
    '$scope', 
    'alertsService', 
    'usuarioService', 
    'messageService', 
    'menuService', 
    'configuracionService', 
    (
        $scope,
        alertsService, 
        usuarioService, 
        messageService, 
        menuService, 
        configuracionService) =>
    {

        $scope.config = {};
        $scope.menu = {};
        $scope.alertas = {};
        $scope.mensajes = {};
        $scope.usuario = {};
        
        menuService.cargarDatos()
        .then(()=> 
        {
            $scope.menu = menuService.datos;
        });

        configuracionService.cargarDatos()
        .then(()=>
        {
            $scope.config = configuracionService.config;
        });
        
        alertsService.cargarDatos()
        .then(()=>
        {
            $scope.alertas = alertsService.datos;
            
        });
        
        messageService.cargarDatos()
        .then(()=> 
        {
            $scope.mensajes = messageService.datos;
        });
        
        usuarioService.cargarDatos()
        .then(()=> 
        {
            $scope.usuario = usuarioService.datos;
        });

    }
])
