/**
 * Entry point of the application
 * 
 * @@source_header
 */

'use strict';

(function() {

	/**
	 * Main angularjs module definition
	 */
	angular.module(
			'focusApp',
			[ 'ngRoute', 'gettext', 'ui.bootstrap', 'leaflet-directive',
					'angular-flot', 'focusApp.dataService', 'focusApp.terrainOverview',
					'focusApp.machineOverview' ])

	/**
	 * Configuration of our application
	 */
	.config([ '$routeProvider', function($routeProvider) {
		// router configuration
		$routeProvider.when('/', {
			templateUrl : 'app/terrain-overview/terrain-overview.tpl.html'
		}).when('/machine/:mid', {
			templateUrl : 'app/machine-overview/machine-overview.tpl.html'
		}).otherwise({
			redirectTo : '/'
		});
	} ])

	/**
	 * Run
	 */
	.run([ 'gettextCatalog', function(gettextCatalog) {
		gettextCatalog.debug = true; // prepend MISSING if not translated
		gettextCatalog.setCurrentLanguage('de-CH');

	} ]);

	// put jquery-code here
	$(document).ready(function() {
		$('#simple-menu').sidr({
			name : 'sidr',
			body : '#mobile-main-content'
		});
		// allow closing when clicking outside of the menu
		$("#mobile-main-content").on("click", function(e) { // was on body.
			$.sidr('close', 'sidr');
		});

		$("#sidr").on("click", function(e) {
			e.stopPropagation();
		});

		$("#sidr a").on('click', function(e) {
			$.sidr('close', 'sidr');
		});

	});

}());