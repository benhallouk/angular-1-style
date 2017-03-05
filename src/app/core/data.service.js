(function(){
    'use strict';
    angular.module('app.core').service('dataService',function($http, $q){
        return {
            get: function()
            {
                return $http.get('/api/data.json').then(function (response) {
                        return response.data;
                })
                .catch(function(message) {
                        console.log(message);
                });
            }
        };
    });
})();