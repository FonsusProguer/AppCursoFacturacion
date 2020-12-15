let configuracionService = angular.module('facturacionApp.configuracionService', []);

configuracionService.factory('configuracionService', [ '$http', '$q', ($http, $q)=>
{
    let self = {
        config : {},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get('api/configuracion.json')
            .then((response)=>
            {
                self.config = response.data;
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
