/**
 * Machine's silvicultural planning
 * 
 * LIGNA scenario: step 8
 * 
 * General description:
 * 		- A simple list of tasks
 * 
 * Input variables: 
 * 		machine[mid].tasks[]
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
	angular.module('focusApp.silviculturalPlanning', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('SilviculturalPlanningController',
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
				NavigationService.currentTitle = 'Silvicultural operation planning - ' + _self.data.name;
				
			} ]);

}());
