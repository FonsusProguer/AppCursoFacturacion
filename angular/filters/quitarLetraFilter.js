let quitarLetraFilter = angular.module('facturacionApp.quitarLetraFilter', []);

quitarLetraFilter.filter('quitarLetraFilter', ()=>
{
    return palabra =>
    {
        if(palabra){

            return palaba.length > 1 ? palabra.substr(1) : palabra; 
        }
    }
})