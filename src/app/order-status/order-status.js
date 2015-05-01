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
 */

'use strict';

(function() {
	angular.module('focusApp.orderStatus', [ 'focusApp.dataService' ])

	.controller('orderStatusController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				
			} ]);

}());
