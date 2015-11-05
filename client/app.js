var Conglom = angular.module('Conglom', ['ngRoute', 'ngCookies'])

Conglom.run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookieStore, $http) {
	Parse.initialize('peWEuER4pLGR2j0uWD4nzwF5P2J3uhiYM03KNNUE','W8FOTKJQptOrVaL98uMzdvlbPRyeDkV69F7uaOW6');
}]);
	
Conglom.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'home/home.view.html',
		})
		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'login/login.view.html',
		})
		.when('/register', {
			controller: 'RegisterController',
			templateUrl: 'register/register.view.html',
		})
		.when('/deck', {
			controller: 'DeckController',
			templateUrl: 'views/deck.html',
		})
		.otherwise({ redirectTo: '/login' });
}]);