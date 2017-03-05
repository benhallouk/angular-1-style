(function(){
    'user strict';
    angular.module('app.widgets').directive('header',function(){
        return{
            restrict: 'A',
            scope:{
                'title': '@',
                'icon': '@'
            },
            template: '<h1 class="page-header"> <span class="glyphicon glyphicon-{{::icon}}" aria-hidden="true"></span> {{::title}}</h1>'
        };
    });
})();