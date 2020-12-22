app.controller('mainController' , 
[
    '$scope', 
    '$window', 
    'alertsService', 
    'usuarioService', 
    'messageService', 
    'menuService', 
    'logoutService', 
    'configuracionService', 
    (
        $scope,
        $window,
        alertsService, 
        usuarioService, 
        messageService, 
        menuService, 
        logoutService, 
        configuracionService) =>
    {

        $scope.config = {};
        $scope.menu = {};
        $scope.alertas = {};
        $scope.mensajes = {};
        $scope.usuario = {};
        
        menuService.cargarDatos()
        .then(()=> 
        {
            $scope.menu = menuService.datos;
        });

        configuracionService.cargarDatos()
        .then(()=>
        {
            $scope.config = configuracionService.config;
        });
        
        alertsService.cargarDatos()
        .then(()=>
        {
            $scope.alertas = alertsService.datos;
            
        });
        
        messageService.cargarDatos()
        .then(()=> 
        {
            $scope.mensajes = messageService.datos;
        });
        
        usuarioService.cargarDatos()
        .then(()=> 
        {
            $scope.usuario = usuarioService.datos;
        });

       $scope.cerrarSesion = ()=>
       {
            logoutService.logout()
            .then((data)=> 
            {
                console.log(data);
                $window.location = data.url;
                if (!data.err) {
                }
            });
       };

    }
])
