var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.main = {
        page: 1,
        pages: 0,
        q: ''
    };
    
    $scope.loadPage = function() {
        $http.get('http://swapi.co/api/people/?page=' + $scope.main.page)
            .success(function (data) {
                $scope.main.persons = data.results;
                
                $scope.main.pages = Math.round(data.count / 10);
            })
            .error(function (data, status) {

                console.log(data);
            
            });
    };
    
    $scope.nextPage = function() {
        if ($scope.main.page < $scope.main.pages){
            $scope.main.page++;
            $scope.loadPage();
        }
    };
    
    $scope.previousPage = function() {
        if ($scope.main.page > 1) {
            $scope.main.page--;
            $scope.loadPage();
        }
    };
    
    $scope.loadPage();
}]);