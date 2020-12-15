let loginService = angular.module('loginApp.loginService', []);

loginService.factory('loginService', ['$http', '$q', ($http, $q)=>
{
    let self = 
    {
        datos       : {},
        guardarDatos : (cliente)=>
        {
            let q = $q.defer();

            $http.post('api/services/clientes/clientes.guardar.php', cliente)
            .then((response)=>
            {   
                self.cargarDatos(self.pag_actual);
                q.resolve();
            })
            .catch((error)=>
            {
                q.reject();
            });

            return q.promise;
        }
    };

    return self;
}]);