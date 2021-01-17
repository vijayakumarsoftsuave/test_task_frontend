'use strict';
angular.module('myApp')
    .component('homeComponent',{
        templateUrl: '../../components/home/home_component.html',
        controller : function HomeController($scope) {
            this.componentName = "home";
        }
    });