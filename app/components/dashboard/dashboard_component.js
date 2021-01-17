// 'use strict';
// angular.module('myApp')
// .component('dashboardComponent',{
//     templateUrl: '../../components/dashboard/dashboard_component.html',
//     controller : function DashboardController($scope) {
//         this.componentName = "Dashboard";
//     }
// });



'use strict';
angular.module('myApp')
    .component('dashboardComponent',{
    templateUrl: '../../components/dashboard/dashboard_component.html',
    controller :['$http','$resource','$log', '$scope', '$location', function DashboardController($http, $resource, $log, $scope,$location) {
        var self = this;


    }]
});