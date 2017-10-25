angular.module('ThinkBig').controller('HomeController', HomeController);
HomeController.$inject = ['$resource','$scope','HomeService'];
function HomeController($resource,$scope,HomeService){
	
	$scope.categories = ["jeans","sweaters","shirts"];
	$scope.loadCategories = function(){
		HomeService.loadCategories().then(function(data){
			$scope.categories = data;
		})
	};
}