app.config(['$routeProvider', ($routeProvider)=> 
{
    $routeProvider
    .when('/',
    {
        templateUrl : 'pages/dashboard/dashboard.html',
        controller : 'dashboardController'
    })
    .when('/clientes',
    {
        templateUrl : 'pages/clientes/clientes.html',
        controller : 'clientesController'
    })
    .when('/facturas',
    {
        templateUrl : 'pages/facturas/facturas.html',
        controller :'facturasController'
    })
    .when('/facturaNueva/:facturaId',
    {
        templateUrl : 'pages/facturas/facturaNueva.html',
        controller : 'facturaNuevaController'
    })
    .otherwise({
        redirecTo : '/'
    });
}])

