/**
 * Time control
 * 
 * LIGNA scenario: step 11
 * 
 * Display description:
 * 		- An overview of time control settings and current metrics for the 
 * 			machine, alng with a mention of the TimeControl product.
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
	angular.module('focusApp.timeControl', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('TimeControlController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {
				
				var _self = this;
				
				/**
				 * Reference to DataService 
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
				_self.data = DataService.data;
				_self.dataMachine = DataService.data.machine[_self.currentMachineId];
	
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'TimeControl - ' + _self.dataMachine.name;

			} ]);

}());
