app.controller('dashboardController', ['$scope', 'facturasService', function($scope, facturasService) {
    
    $scope.totalFacturas;

    facturasService.obtenerTotalFacturas()
    .then((response)=>
    {
        $scope.totalFacturas = response.totalFacturas;
    });
}]);