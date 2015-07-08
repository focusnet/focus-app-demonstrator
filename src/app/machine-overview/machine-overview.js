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
 * --
 * 
 * This file is part of the focus-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.machineOverview', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('MachineOverviewController',
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
				_self.data = DataService.data.machine[_self.currentMachineId];
	
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = _self.data.name + ' - ' + (_self.data.type == 'H' ? 'Harverster' : (_self.data.type == 'F' ? 'Forwarder' : 'unknown'));

			} ]);

}());
