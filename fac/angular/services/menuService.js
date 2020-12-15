let menuService = angular.module('facturacionApp.menuService', []);

menuService.factory('menuService', ['$http', '$q', ($http, $q)=>
{
    let self =
    {
        datos:{},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get("api/menu.json")
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