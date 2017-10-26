angular.module('ThinkBig', ['ngResource']);

angular.module('ThinkBig').config(configFunction);

configFunction.$inject = ['$resourceProvider','$locationProvider'];

function configFunction($resourceProvider, $locationProvider) {
	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
};
