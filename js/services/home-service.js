angular.module('ThinkBig').service('HomeService', HomeService);
HomeService.$inject = ['$resource'];
function HomeService($resource){
	this.loadCategories = loadCategories;
	this.loadProducts = loadProducts;
	this.loadProductsDetails = loadProductsDetails;
	
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
	
	function loadProductsDetails(id){
		var product = createAngularResource(
				'http://localhost:8080/products/findById/:id', {
					id : id
				});
		return product.get({}).$promise;
	}
	
	function createAngularResource(resourceUrl, defaultParams) {
		return $resource(resourceUrl, defaultParams, {
			put : {
				method : "PUT",
				isArray : true
			},
			putWithoutArray : {
				method : "PUT"
			},
			get : {
				method : 'GET'
			},
			post : {
				method : "POST",
				isArray : true
			},
			postWithoutArray : {
				method : "POST"
			},
			remove : {
				method : "DELETE"
			}
		});
	}
}