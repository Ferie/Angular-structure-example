(function () {
    'use strict';

    angular.module('myAPP', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.caseInsensitive = true;

        $routeProvider
        .when('/home', {
            templateUrl: 'views/Home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/About.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'views/Contact.html',
            controller: 'ContactController'
        })
        .when("/main", {
            templateUrl : "views/main.html"
        })
        .when("/colour/red", {
            templateUrl : "views/red.html"
        })
        .when("/colour/green", {
            templateUrl : "views/green.html"
        })
        .when("/colour/blue", {
            templateUrl : "views/blue.html"
        })
        .when('/content/first', {
            templateUrl: 'views/items.html',
            controller: 'first'
        })
        .when('/content/second', {
            templateUrl: 'views/items.html',
            controller: 'second'
        })
        .otherwise({
            redirectTo: '/home'
        });
    });


    angular.module('myAPP').controller('first', function ($scope) {
        $scope.list = [1, 2, 3, 4, 5];
    });

    angular.module('myAPP').controller('second', function ($scope) {
        $scope.list = [1, 2, 3];
    });
})();