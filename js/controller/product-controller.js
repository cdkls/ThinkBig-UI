angular.module('ThinkBig').controller('ProductController', ProductController);
ProductController.$inject = ['$scope','HomeService','$location','$window'];
function ProductController($scope,HomeService,$location,$window){
	
	$scope.loadProducts = function(){
		HomeService.loadProducts().then(function(data){
			$scope.products = data;
		})
	};
	
	$scope.redirectToPage = function(id){
		$window.location.href = id+'.html';
	};
	
	$scope.redirectProductPage = function(id){
		$window.location.href = 'single.html?productId='+id;
	};
	
	$scope.loadProductDetails = function(){
		HomeService.loadCategories().then(function(data){
			$scope.categories = data;
		})
		
		HomeService.loadProductsDetails($location.search().productId).then(function(data){
			$scope.productDetails = data;
		})
	};
}