(function(){
    'use strict';
    angular.module('app.dashboard').controller('dashboard',function(dataService){
        var vm = this;
        vm.title = "Dashboard";
        vm.icon = "dashboard";

        dataService.get().then(function(data){
            vm.data = data;
        });
    });
})();