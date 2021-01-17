'use strict';
angular.module('myApp').component('footerComponent',{
    templateUrl: '../../components/footer/footer_component.html',
    controller :['$http','$resource','$log', '$scope', function FooterController($http, $resource, $log, $scope) {
        var self = this;
        // POST DATA
        this.getWether = $resource('http://localhost/api/getWether', {},{get : {method: 'GET'}});
        // this.$onInit = function () {
        //
        //     $http({
        //         method: 'GET',
        //         url: 'http://localhost/api/getWether'
        //     }).then(function (success) {
        //         // $scope.success = JSON.stringify(success);
        //         $log.log(success);
        //         $scope.data = success;
        //         //     $scope.dashboard = false;
        //         // $location.path( "/team" );
        //     }, function (error) {
        //         $log.log(error);
        //
        //     });
        // };



    }]
});