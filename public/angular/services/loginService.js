app.factory('loginService', ['$http', '$q', ($http, $q)=>
{
    let self = 
    {
        datos       : {},
        login : (datos)=>
        {
            let q = $q.defer();

            $http.post('api/services/login/post.verificar.php', datos)
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