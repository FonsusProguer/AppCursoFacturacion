let alertsService = angular.module('facturacionApp.alertsService', []);

alertsService.factory('alertsService', ['$http', '$q', ($http, $q)=>
{
    let self =
    {
        datos:{},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get("api/alertas.json")
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