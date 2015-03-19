"use strict";

var LearnAngJs = angular.module("LearnAngJs");

LearnAngJs.controller('EventController',
     function EventController($scope,eventData) {

         $scope.sortorder = "name";

         //eventData Service
         $scope.event = eventData.event;
         $scope.GetVote = function (session) {
             session.totalVote++;
         }
     }

    );