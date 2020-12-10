let clientesController = angular.module('facturacionApp.clientesController', ['facturacionApp.getClientesService']);

clientesController.controller('clientesController', ['$scope', 'clientesService', function($scope, clientesService)
{
    $scope.clientes = {};

    clientesService.cargarDatos()
    .then((response)=>{
        $scope.clientes = clientesService.datos.clientes;
    });

}]);