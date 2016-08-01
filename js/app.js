
// Aplicación
var app = angular.module('lebrand', ['ngRoute','ngSanitize']);



app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/home',{templateUrl: "home.html"})
                .when('/',{templateUrl: "home.html"})
                .when('/contact',{templateUrl: "contact.html"})
                .when('/work',{templateUrl: "work.html"})
                .when('/about',{templateUrl: "work.html"})
                .otherwise({templateUrl:"404.html"});
}]);

app.controller('menu', function($scope, $location){
	console.log('menu');
	$scope.toPage = function(page){
		$location.path(page);
	}

	$scope.showing = false;
	$scope.animateMenu = function(){
		if($scope.showing){
			$('#menu2').removeClass('pressed');
			$scope.showing = false;
		} else {
			$scope.showing = true;
			$('#menu2').addClass('pressed');

		}

	}
});

app.controller('work', function($scope, $location){
	console.log('menu');
	$scope.toPage = function(page){
		$location.path(page);
	}

	$scope.showing = false;
	$scope.animateMenu = function(){
		if($scope.showing){
			$('#menu2').removeClass('pressed');
			$scope.showing = false;
		} else {
			$scope.showing = true;
			$('#menu2').addClass('pressed');

		}

	}
});