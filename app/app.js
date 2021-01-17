'use strict';

// Declare app level module which depends on views, and core components

angular.module('myApp', ['ngResource', 'ngRoute']);
window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
        alert('(CNTRL + F) is disabled');
    }
});
    // .config(function($locationProvider) {
    //     $locationProvider.html5Mode(true);
    // })
    // .value('$routerRootComponent', 'myApp');
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
