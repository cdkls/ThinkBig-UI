angular.module('ThinkBig').service('HomeService', HomeService);
HomeService.$inject = ['$resource'];
function HomeService($resource){
	this.loadCategories = loadCategories;
	this.loadProducts = loadProducts;
	
	function loadCategories(){
		return $resource('http://localhost:8080/categories/all').query({
            method : 'GET',
            isArray: true
        }).$promise;
		
	}
	
	function loadProducts(){
		return $resource('http://localhost:8080/products/all').query({
            method : 'GET',
            isArray: true
        }).$promise;
		
	}
}