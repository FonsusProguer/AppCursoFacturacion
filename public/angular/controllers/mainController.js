app.controller('mainController' , ['$scope', 'loginService', '$window', ( $scope, loginService, $window) =>
    {
        $scope.datos = {};
        $scope.invalido = false;
        $scope.cargando = false;
        $scope.mensaje = "";
        $scope.ingresar = (datos)=>
        {
            if (datos.usuario.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su usuario';
                return;
            }else if (datos.contrasena.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su contraseña';
                return;
            }

            $scope.invalido = false;
            $scope.cargando = true;

            loginService.login(datos)
            .then(data=>{
                if (data.err) {
                    $scope.cargando = false;
                    $scope.invalido = true
                    $scope.mensaje = data.mensaje;
                }else
                {
                    $window.location = data.url;
                }
            });
        };
    }
]);
