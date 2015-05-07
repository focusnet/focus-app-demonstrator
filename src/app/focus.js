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
	angular
			.module(
					'focusApp',
					[ 'ngRoute', 'gettext', 'leaflet-directive', 'gridshore.c3js.chart',
							'angular-flot', 'focusApp.dataService', 'focusApp.inboxService',
							'focusApp.navigationService', 'focusApp.goBack',
							'focusApp.actionBar', 'focusApp.timeMachine',
							'focusApp.notifications', 'focusApp.dateDisplay',
							'focusApp.terrainOverview', 'focusApp.machineOverview',
							'focusApp.orderStatus', 'focusApp.notificationsInbox',
							'focusApp.standInformation', 'focusApp.silviculturalPlanning',
							'focusApp.standMap', 'focusApp.woodpileInformation',
							'focusApp.timeControl', 'focusApp.machineDataOverview',
							'focusApp.engineRevolution', 'focusApp.fuelConsumption',
							'focusApp.vehiclePayload' ])

			/**
			 * Configuration of our application
			 */
			.config(
					[
							'$routeProvider',
							function($routeProvider) {
								// router configuration
								$routeProvider
										/**
										 * General purpose routes
										 */
										.when(
												'/',
												{
													templateUrl : 'app/terrain-overview/terrain-overview.tpl.html'
												})
										.when(
												'/inbox',
												{
													templateUrl : 'app/notifications-inbox/notifications-inbox.tpl.html'
												})

										/**
										 * Machine-specific routes
										 */
										.when(
												'/machine/:mid',
												{
													templateUrl : 'app/machine-overview/machine-overview.tpl.html'
												})
										.when('/machine/:mid/order-status', {
											templateUrl : 'app/order-status/order-status.tpl.html'
										})
										.when(
												'/machine/:mid/silvicultural-planning',
												{
													templateUrl : 'app/silvicultural-planning/silvicultural-planning.tpl.html'
												})
										.when('/machine/:mid/timecontrol', {
											templateUrl : 'app/timecontrol/timecontrol.tpl.html'
										})
										.when(
												'/machine/:mid/technical-data',
												{
													templateUrl : 'app/machine-data-overview/machine-data-overview.tpl.html'
												})
										.when(
												'/machine/:mid/technical-data/engine-revolution',
												{
													templateUrl : 'app/engine-revolution/engine-revolution.tpl.html'
												})
										.when(
												'/machine/:mid/technical-data/fuel-consumption',
												{
													templateUrl : 'app/fuel-consumption/fuel-consumption.tpl.html'
												})
										.when(
												'/machine/:mid/technical-data/vehicle-payload',
												{
													templateUrl : 'app/vehicle-payload/vehicle-payload.tpl.html'
												})

										/**
										 * Woodpile-specific routes
										 */
										.when(
												'/woodpile/:wid',
												{
													templateUrl : 'app/woodpile-information/woodpile-information.tpl.html'
												})

										/**
										 * Stand-specific routes
										 */
										.when(
												'/stand/:sid/information',
												{
													templateUrl : 'app/stand-information/stand-information.tpl.html'
												}).when('/stand/:sid/map', {
											templateUrl : 'app/stand-map/stand-map.tpl.html'
										})

										.otherwise({
											redirectTo : '/'
										});
							} ])

			/**
			 * Run
			 */
			.run(
					[ 'gettextCatalog', 'DataService', 'InboxService',
							function(gettextCatalog, DataService, InboxService) {
								gettextCatalog.debug = true; // prepend MISSING if not
																							// translated
								gettextCatalog.setCurrentLanguage('en-UK');
								DataService.init().then(function() {
									InboxService.init();
								});
							} ]);

}());