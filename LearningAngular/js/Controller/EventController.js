"use strict";

var LearnAngJs = angular.module("LearnAngJs");

LearnAngJs.controller('EventController',
     function EventController($scope) {

         $scope.sortorder = "name";
         $scope.event = {

             name: 'Angular Tutorial',
             date: '1/1/2015',
             time: '10:30 am',
             location:{
                 address: 'CDN',
                 city: 'Thames',
                 County:'Oxfordshire'
             },
             imageUrl: '/Img/cdnLogo.jpg',
             sessions:[
                  {
                      name: 'Beginners',
                      Duration: '2 Hours',
                      Level: 1,
                      Price:25,
                      totalVote:0
                  },
                  {
                       name:'Intermidiate',
                       Duration: '4 Hours',
                       Level: 2,
                       Price: 50,
                       totalVote:0
                   },
                  {
                      name:'Advance',
                      Duration: '10 Hours',
                      Level: 3,
                      Price: 100,
                      totalVote: 0
                  }
             ]
         }
         $scope.GetVote = function (session) {
             session.totalVote++;
         }
     }

    );