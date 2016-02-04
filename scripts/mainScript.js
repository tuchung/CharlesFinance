//---------------------------------------------------
var mainApp = angular.module('mainApp', ['ngRoute']);
//routing
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
  var fetchData = new XMLHttpRequest();
  fetchData.open('GET', 'textContent/essay.txt');
  fetchData.onreadystatechange = function(){
    console.log('it hit!!');
    $scope.message = fetchData.responseText;
  }
  fetchData.send();

});
//----------------------------------------------------
$(document).ready(function()
{
  var num = 50;
  $(window).bind('scroll', function()
  {
    if($(window).scrollTop() > num){
      $('.navbar.navbar-inverse').addClass('fixed');
    }
    else{
      $('.navbar.navbar-inverse').removeClass('fixed');
    }
  });
});
