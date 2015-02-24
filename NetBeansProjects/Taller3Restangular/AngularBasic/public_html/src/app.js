(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule', 'playerModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html'
			}, '/player', {
				templateUrl: 'src/modules/player/player.tpl.html'
			})
                        $routeProvider.when('/player', {
				templateUrl: 'src/modules/player/player.tpl.html'
			}).otherwise('/');
		}]);

	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);

	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);}]);
                
        //Configuración módulo player
        var playerModule = angular.module('playerModule', ['CrudModule', 'MockModule']);
        
        playerModule.constant('player.context', 'players');
        
        playerModule.config(['player.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);}]);
              
})();