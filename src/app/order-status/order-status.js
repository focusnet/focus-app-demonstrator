/**
 * Machine order status
 * 
 * LIGNA scenario: step 4
 * 
 * Display description:
 * 		- Logging volume: planned, current, with progress bar
 * 		- Work schedule: planned, current, with progress bar
 * 		- deadline
 * 		- Completion status: finished earlier, just in time, finished after deadline
 * 
 * Input variables:
 * 		machine[mid].logging_volume.planned
 *		machine[mid].logging_volume.current
 *		machine[mid].working_time.planned
 *		machine[mid].working_time.current
 *		machine[mid].target_deadline
 *		machine[mid].completion_status
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
	angular.module('focusApp.orderStatus', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('OrderStatusController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {

				var _self = this;

				/**
				 * Reference to the Data service
				 */
				_self.dataSvc = DataService;

				/**
				 * Get the id of the currently accessed machine
				 */
				var parts = $location.path().split(/\//);
				_self.currentMachineId = parts[2] || 0;
				
				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data.machine[_self.currentMachineId];
				
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'Order status' + ' - ' + _self.data.name;
			} ]);

}());
