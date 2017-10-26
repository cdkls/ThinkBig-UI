angular.module('ThinkBig').controller('ProductController', ProductController);
ProductController.$inject = ['$scope','HomeService'];
function ProductController($scope,HomeService){
	
	$scope.loadProducts = function(){
		HomeService.loadProducts().then(function(data){
			console.log(data);
			$scope.products = data;
		})
	};
}