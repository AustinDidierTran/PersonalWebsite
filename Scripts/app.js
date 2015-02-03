(function(){

	var app = angular.module('app', []);
	
	app.controller('MainController', function($scope, $http){
		
		this.tab = 0;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
	
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		$http.get('JSON/socials.json').success(function(data) {
    		$scope.socials = data;
		});
		$http.get('JSON/experiences.json').success(function(data) {
    		$scope.experiences = data;
		});
		$http.get('JSON/scolaires.json').success(function(data) {
    		$scope.scolaires = data;
		});
		$http.get('JSON/tabs.json').success(function(data) {
    		$scope.tabs = data;
		});
		$http.get('JSON/articles.json').success(function(data) {
    		$scope.articles = data;
		});
		$http.get('JSON/connaissances.json').success(function(data) {
    		$scope.connaissances = data;
		});
		$http.get('JSON/footer.json').success(function(data) {
    		$scope.footer = data;
		});
	});
	
	
	
	})();

