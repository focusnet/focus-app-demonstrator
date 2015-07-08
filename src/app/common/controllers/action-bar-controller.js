/**
 * Controller allowing to render the Navigation bar of the application
 * 
 * 
 * Display description: - A chart of the fuel consumption for the current day -
 * a table of the average fuel consumption per hours for the past 8 hours - ??
 * 
 * Input variables: machine[3].technical_data.fuel_consumption
 * 
 * @@source_header
 * 
 * --
 * 
 * This file is part of the focus-mobile-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.actionBar', [ 'focusApp.dataService', 'focusApp.inboxService', 'focusApp.navigationService', 'focusApp.notifications' ])

	.controller('ActionBarController', [ 'DataService', 'InboxService', 'NavigationService', function(DataService, InboxService, NavigationService) {

		var _self = this;

		/**
		 * Reference to the current data sample being rendered
		 */
		_self.data = DataService.data;
		
		/**
		 * Ref to navigation service
		 */
		_self.navSvc = NavigationService;
		
		/**
		 * Ref to Inbox service
		 */
		_self.inboxSvc = InboxService;

		/**
		 * function to initialize the controller
		 */
		var init = function() {
			$('#simple-menu').on('click', function() { 
				$('#dark-overlay').fadeIn(100);
			}).sidr({
				name : 'sidr',
				speed: 100,
				displace : false,
				onClose : function() {
					$('#dark-overlay').fadeOut(100);
				}
			});

			// allow closing when clicking outside of the menu
			$('#dark-overlay').on("click", function(e) { // was on body.
				$.sidr('close', 'sidr');
			});

			$("#sidr").on("click", function(e) {
				e.stopPropagation();
			});

			$("#sidr a").on('click', function(e) {
				$.sidr('close', 'sidr');
			});

		};

		/**
		 * And run the initialization
		 */
		init();

	} ]);
}());
