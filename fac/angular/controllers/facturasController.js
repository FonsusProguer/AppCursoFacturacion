app.controller('facturasController', ['$scope', 'facturasService', function($scope, facturasService) {
    
    $scope.facturas={};
    $scope.irAPagina = pagina=>
    {
        facturasService.cargarListado(pagina)
        .then(()=>{
            $scope.facturas = facturasService;
        });
    };
    $scope.irAPagina(1);

}] );