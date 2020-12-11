let clientesController = angular.module('facturacionApp.clientesController', ['facturacionApp.getClientesService']);

clientesController.controller('clientesController', ['$scope', 'clientesService', function($scope, clientesService)
{
    $scope.clientes = {};
    $scope.limtePaginacion = 15;

    
    $scope.irAPagina = pagina=>
    {
        clientesService.cargarDatos(pagina)
        .then((response)=>{
            $scope.clientes = clientesService;
            console.log($scope.clientes);
        });
    };
    $scope.irAPagina(1);


    $scope.mostrarClienteModal = cliente=>
    {
        $('#clienteModal').modal();
    };
}]);