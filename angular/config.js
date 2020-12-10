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
    .otherwise({
        redirecTo : '/'
    });
}])

