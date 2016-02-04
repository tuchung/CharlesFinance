var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'pages/home.html',
    controller : 'mainController'
  })

  .when('/about',{
    templateUrl : 'pages/contactMe.html',
    controller : 'contactController'
  });
});

mainApp.controller('mainController', function($scope){

    $scope.message = "This Website provide service for user to file their tax.";
});

mainApp.controller('contactController', function($scope){
  $scope.message = "My name is Charles Pier and I am a accountant professor";
});
