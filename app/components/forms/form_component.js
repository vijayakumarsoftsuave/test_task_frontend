'use strict';
angular.module('myApp').component('formComponent',{
    templateUrl: '../../components/forms/form_component.html',
    controller : function FormController($scope) {
        this.componentName = "Forms";
    }
});