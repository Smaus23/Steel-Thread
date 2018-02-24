var app = angular  
       .module("myModule", [])  
       .controller("myController", function ($scope, $http) {  
  
           $http.get("http://localhost:52131/api/name")  
                .then(function (response) {  
                    $scope.employees = response.data;  
                });  
       });   