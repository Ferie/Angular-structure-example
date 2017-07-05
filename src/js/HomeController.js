(function () {
    'use strict';

    angular.module('myAPP').controller('HomeController', function ($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
})();