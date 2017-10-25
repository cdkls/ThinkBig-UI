angular.module('ThinkBig').service('HomeService', HomeService);
HomeService.$inject = ['$resource'];
function HomeService($resource){
	this.loadCategories = loadCategories;
	
	function loadCategories(){
		return $resource('http://localhost:8080/welcome').query({
            method : 'GET'
        }).$promise;
		
	}
}