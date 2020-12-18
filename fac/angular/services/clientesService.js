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
        buscar: (parametro) =>
        {
			let q = $q.defer();

			self.cargando = true;

            $http.get('api/services/clientes/clientes.buscar.php?p=' + parametro )
            .then( response => 
            {
                self.cargando = false;

                self.clientes = response.data.clientes;
                q.resolve();

            }).catch(error => {
                q.reject();
            });

			return q.promise;

		},
        cargarDatos : (pagina)=>
        {
            let q = $q.defer();

            $http.get('api/services/clientes/clientes.get.php?p='+pagina)
            .then((response)=>
            {   
                self.err = response.data.err 
                self.conteo = response.data.conteo 
                self.clientes = response.data.clientes 
                self.pag_actual = response.data.pag_actual 
                self.pag_siguiente = response.data.pag_siguiente 
                self.pag_anterior = response.data.pag_anterior 
                self.total_paginas = response.data.total_paginas 
                self.paginas = response.data.paginas 
                self.datos = response.data.clientes;
                q.resolve();
            })
            .catch((error)=>
            {
                q.reject();
            });

            return q.promise;
        },
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