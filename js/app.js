/* Chris Nilghe
 * Angularjs Routing
 * http://stackoverflow.com/questions/14771091/removing-the-symbol-from-angular-js-urls
 */

angular.module('ironworks', []).
  	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  	$routeProvider.
  		when('/about', {templateUrl: 'partials/about.html', controller: MainCtrl}).
  		otherwise({redirectTo: '/', templateUrl: 'partials/index.html', controller: MainCtrl});
  		$locationProvider.html5Mode(true);
}]);