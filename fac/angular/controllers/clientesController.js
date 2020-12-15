let clientesController = angular.module('facturacionApp.clientesController', ['facturacionApp.getClientesService']);

clientesController.controller('clientesController', ['$scope', 'clientesService', function($scope, clientesService)
{
    $scope.clientes = {};
    $scope.clienteSeleccionado = {};
    $scope.limtePaginacion = 15;

    
    $scope.irAPagina = pagina=>
    {
        clientesService.cargarDatos(pagina)
        .then(()=>{
            $scope.clientes = clientesService;
        });
    };
    $scope.irAPagina(1);

    $scope.mostrarClienteModal = cliente=>
    {
        angular.copy(cliente, $scope.clienteSeleccionado);
        $('#clienteModal').modal();
    };
    
    $scope.guardarCliente = (cliente)=>
    {
        clientesService.guardarDatos(cliente)
        .then(()=>{
            $scope.clienteSeleccionado = {};
            $('#clienteModal').modal('hide');
        });
    };

}]);