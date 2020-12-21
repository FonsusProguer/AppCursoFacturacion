let app = angular.module('facturacionApp', 
[
    'ngRoute',
    
    /*Filtros*/
    'facturacionApp.quitarLetraFilter',
    
    /*Directivas*/
    'facturacionApp.enterKeyDirective',

    /**Servicios*/
    'facturacionApp.configuracionService',
    'facturacionApp.menuService',
    'facturacionApp.messageService',
    'facturacionApp.alertsService',
    'facturacionApp.usuarioService',
    'facturacionApp.logoutService',
    'facturacionApp.facturasService',

    /*Controladores*/
    'facturacionApp.mainController',
    'facturacionApp.clientesController',
    'facturacionApp.facturaNuevaController',
    'facturacionApp.facturasController',
    'facturacionApp.dashboardController'
]);


