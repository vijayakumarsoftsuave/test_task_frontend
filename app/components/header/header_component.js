'use strict';
angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl : "../../components/home/home_component.html"
            })
            .when("/project", {
                templateUrl : "../../components/project/project_component.html"
            })
            .when("/team", {
                templateUrl : "../../components/team/team_component.html"
            });

    }).component('headerComponent',{
    templateUrl: '../../components/header/header_component.html',
    controller : function HeaderController($scope) {
        this.componentName = "Header";
    }
});