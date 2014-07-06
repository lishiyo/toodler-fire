'use strict';

//Define angular app
//added UserApp to second parameter
var app = angular.module('TaskManager', ['myApp.controllers','ui.sortable', 'ngRoute', 'UserApp']); 

//config

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', login: true});
	$routeProvider.when('/signup', {templateUrl: 'partials/signup.html', public: true});
	//$routeProvider.when('/verify-email', {templateUrl: 'partials/verify-email.html', verify_email: true});
	//$routeProvider.when('/reset-password', {templateUrl: 'partials/reset-password.html', public: true});
	//$routeProvider.when('/set-password', {templateUrl: 'partials/set-password.html', set_password: true});
	$routeProvider.when('/', {templateUrl: 'index.html', controller: 'taskController'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);
/**
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'taskController'
    })
    .when('/login', {
        templateUrl: '/partials/login.html',
        login: true
    })
    .when('/signup', {
        templateUrl: '/partials/signup.html',
        public: true
    })
      .otherwise({
        redirectTo: '/',
          
      });
    $locationProvider.html5Mode(true);
  });
  **/


//run
app.run(function($rootScope, user) {
	user.init({ appId: '53b106ec39c1a' });
});

