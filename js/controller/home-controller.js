angular.module('ThinkBig').controller('HomeController', HomeController);
HomeController.$inject = ['$scope','HomeService'];
function HomeController($resource,$scope,HomeService){
	
	$scope.loadCategories = function(){
		HomeService.loadCategories().then(function(data){
			$scope.categories = data;
		})
	};
}