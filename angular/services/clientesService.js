let clientesService = angular.module('facturacionApp.getClientesService', []);

clientesService.factory('clientesService', ['$http', '$q', ($http, $q)=>
{
    let self = 
    {
        err     	: false, 
        conteo 		: false,
        clientes 	: 0,
        pag_actual    : 1,
        pag_siguiente : 1,
        pag_anterior  : 1,
        total_paginas : 1,
        paginas	    : [],
        datos       : {},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get('api/services/clientes/clientes.get.php')
            .then((response)=>
            {   
                self.datos = response.data;
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