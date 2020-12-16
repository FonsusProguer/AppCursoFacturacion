app.config(['$routeProvider', ($routeProvider)=> 
{
    $routeProvider
    .when('/',
    {
        templateUrl : 'pages/dashboard/dashboard.html'
    })
    .when('/clientes',
    {
        templateUrl : 'pages/clientes/clientes.html',
        controller : 'clientesController'
    })
    .when('/facturas',
    {
        templateUrl : 'pages/facturas/facturas.html'
    })
    .when('/facturaNueva',
    {
        templateUrl : 'pages/facturas/facturaNueva.html'
    })
    .otherwise({
        redirecTo : '/'
    });
}])

