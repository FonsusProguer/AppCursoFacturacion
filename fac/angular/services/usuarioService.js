app.factory('usuarioService', ['$http', '$q', ($http, $q)=>
{
    let self =
    {
        datos:{},
        cargarDatos : ()=>
        {
            let q = $q.defer();

            $http.get("api/usuario.json")
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