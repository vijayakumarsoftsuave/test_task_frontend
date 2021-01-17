'use strict';
angular.module('myApp').component('superadminComponent',{
    templateUrl: '../../components/superadmin/superadmin_component.html',
    controller :['$http','$resource','$log', '$scope', function SuperadminController($http, $resource, $log, $scope) {
        var self = this;
        this.componentName = 'super admin';
        $scope.adduser = false;
        $scope.addproject = false;
        $scope.viewteam = false;
        $scope.viewproject = false;

        $scope.addEmployee  = function(){
            $scope.message = 'clicked';
            $scope.adduser = true;
            $scope.addproject = false;
            $scope.viewteam = false;
            $scope.viewproject = false;
        };

        $scope.addProject  = function(){
            $scope.message = 'clicked';
            $scope.addproject = true;
            $scope.adduser = false;
            $scope.viewteam = false;
            $scope.viewproject = false;
        };

        $scope.viewTeam  = function(){
            $scope.message = 'clicked';
            $scope.viewteam = true;
            $scope.adduser = false;
            $scope.addproject = false;
            $scope.viewproject = false;
        };

        $scope.viewProject  = function(){
            $scope.message = 'clicked';
            $scope.viewteam = false;
            $scope.adduser = false;
            $scope.addproject = false;
            $scope.viewproject = true;
        };
    }]
});