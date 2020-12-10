let messageService = angular.module('facturacionApp.messageService', []);

messageService.factory('messageService', ['$http', '$q', ($http, $q)=>
{
    let self = 
    {
        datos:{},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get("api/mensajes.json")
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