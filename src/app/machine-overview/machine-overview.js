/**
 * Machine overview dashboard
 * 
 * LIGNA scenario: step 3
 * 
 * Display description:
 * 		- name of the machine
 * 		- status indicator (always working in our scenario)
 * 		- machine general information
 * 		- links to other pages
 * 
 * Input variables:
 * 		machine[mid].name
 *		machine[mid].contractor
 * 		machine[mid].logging_volume
 * 		machine[mid].working_time
 * 		machine[mid].target_deadline
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.machineOverview', [ 'focusApp.dataService' ])

	.controller('MachineOverviewController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
