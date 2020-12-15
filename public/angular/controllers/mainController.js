let mainController = angular.module('loginApp.mainController', []);

mainController.controller('mainController' , ['$scope', 'loginService', ( $scope, loginService) =>
    {
        $scope.datos = {};
        $scope.invalido = false;
        $scope.cargando = false;
        $scope.mensaje = "";
        $scope.ingresar = (datos)=>
        {
            console.log(datos);

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
                $scope.cargando = false;

            });
        };
    }
]);
