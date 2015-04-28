/**
 * Time control
 * 
 * LIGNA scenario: step 11
 * 
 * Display description:
 * 		- An overview of time control settings and current metrics for the 
 * 			machine, along with a mention of the TimeControl product.
 * 
 * Input variables:
 * 		timecontrol.start_of_day
 *		timecontrol.end_of_day
 * 		machine[mid].name
 *		machine[mid].productivity.mean_daily_working_time
 *		machine[mid].productivity.total_repair_time
 *		machine[mid].productivity.total_break_time
 * 		machine[mid].productivity.total_moving_time
 * 		machine[mid].productivity.eradication_hourly
 *		machine[mid].productivity.eradication_daily
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.timeControl', [ 'focusApp.dataService' ])

	.controller('TimeControlController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
