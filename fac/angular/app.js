let app = angular.module('facturacionApp', 
[
    'ngRoute',
    
    /*Filtros*/
    'facturacionApp.quitarLetraFilter',

    /*Controladores*/
    'facturacionApp.mainController',
    'facturacionApp.clientesController',

    /**Servicios*/
    'facturacionApp.menuService',
    'facturacionApp.messageService',
    'facturacionApp.alertsService',
    'facturacionApp.configuracionService',
    'facturacionApp.usuarioService',
    'facturacionApp.logoutService'
]);


