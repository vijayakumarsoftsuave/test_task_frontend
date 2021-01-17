// 'use strict';
// angular.module('myApp')
//     .component('teamComponent',{
//         templateUrl: '../../components/team/team_component.html',
//         controller : function TeamController($scope) {
//             this.componentName = "Team";
//         }
//     });



'use strict';
angular.module('myApp')
    .component('teamComponent',{
    templateUrl: '../../components/team/team_component.html',
    controller :['$http','$resource','$log', '$scope', '$location', function TeamController($http, $resource, $log, $scope,$location) {
        var self = this;
        $scope.team = true;
        $scope.teamview = false;
        // POST DATA
        this.user = $resource('http://localhost/api', {},{get : {method: 'GET', isArray:true}});
        this.$onInit = function () {
            this.user.get().$promise.then(function (response){
                $log.log(response);
                // $scope.login = false;
                $scope.message = response;

            }, function (error){
                $log.log(error);
            });
        };

        $scope.removeUser = function(user){
            $scope.id = user.id;

            $http({
                method: 'POST',
                url: "http://localhost/delete_user",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    id: $scope.id
                }
            }).then(function (success) {
                $log.log(success);
                $scope.teamview = true;
                $scope.team = false;

            }, function (error) {
                $log.log(error);

            });


        };

    }]
});