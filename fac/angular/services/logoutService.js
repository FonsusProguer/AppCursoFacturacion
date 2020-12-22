app.factory('logoutService', ['$http', '$q', ($http, $q)=>
{
    let self =
    {
        logout : ()=>
        {
            let q = $q.defer();
            $http.get("api/services/logout/logout.php")
            .then((response)=>
            {
                q.resolve(response.data);
            })
            .catch((error)=>
            {
                q.reject(error);
            });
            return q.promise;
        }
    };
    return self;
}]);