let clientesController = angular.module('facturacionApp.clientesController', ['facturacionApp.getClientesService']);

clientesController.controller('clientesController', ['$scope', 'clientesService', function($scope, clientesService)
{
    $scope.clientes = {};
    $scope.clienteSeleccionado = {};
    $scope.limtePaginacion = 15;

    
    $scope.irAPagina = pagina=>
    {
        clientesService.cargarDatos(pagina)
        .then((response)=>{
            $scope.clientes = clientesService;
        });
    };
    $scope.irAPagina(1);


    $scope.mostrarClienteModal = cliente=>
    {
        angular.copy(cliente, $scope.clienteSeleccionado);
        $('#clienteModal').modal();
    };
}]);