let loginService = angular.module('loginApp.loginService', []);

loginService.factory('loginService', ['$http', '$q', ($http, $q)=>
{
    let self = 
    {
        datos       : {},
        login : (datos)=>
        {
            let q = $q.defer();

            $http.post('public/api/services/login/post.verificar.php', datos)
            .then((response)=>
            {
                console.log(response);   
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