let dashboardController = angular.module('facturacionApp.dashboardController', []);

dashboardController.controller('dashboardController', ['$scope', 'facturasService', function($scope, facturasService) {
    
    $scope.totalFacturas;

    facturasService.obtenerTotalFacturas()
    .then((response)=>
    {
        $scope.totalFacturas = response.totalFacturas;
    });
}]);