'use strict';
angular.module('myApp').component('searchComponent',{
    templateUrl: '../../components/searchbar/search_component.html',
    controller : function SearchController($scope) {
        this.componentName = "Search";
    }
});