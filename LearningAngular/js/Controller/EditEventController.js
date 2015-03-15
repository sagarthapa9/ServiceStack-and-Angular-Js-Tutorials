"use strict";
var LearnAngJs = angular.module("LearnAngJs");

LearnAngJs.controller('EditEventController',
    function EditEventController($scope) {

        $scope.btnSave = function (event) {
            window.alert(" Hello " + event.name);
        };

        $scope.btnCancel = function (event) {

            window.location = "/NewEvent.html";
        };

    }
);