'use strict';

/* Controllers */
var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.name = "ProductsCtrl";
}]);

shopControllers.controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/allusers').success(function(data) {
    $scope.users = data;
  });
}]);

shopControllers.controller('ProductsCtrl', ['$scope', function ($scope) {
  $scope.name = "ProductsCtrl";
}]);

shopControllers.controller('AdminCtrl', ['$scope', function ($scope) {
  $scope.name = "AdminCtrl";
}]);
