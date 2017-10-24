angular.module('ThinkBig').controller('HomeController', HomeController);
HomeController.$inject = ['$resource','$scope'];
function HomeController($resource,$scope){
	$scope.clickMe = function(){
		data().then(function(data){
			alert(data[0].name);
		})
	};
	
	var data = function(){
		return $resource('http://localhost:8080/welcome').query({
            method : 'GET'
        }).$promise;
		
	}
}