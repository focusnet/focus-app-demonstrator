/**
 * Machine technical data overview
 * 
 * LIGNA scenario: step 12
 * 
 * Display description:
 * 		- a dashboard-like view of the main technical metrics of the machine
 * 			(e.g. with gauge-meters)
 * 		- The user can click a "View details" link to see the details for:
 * 			engine revolutions, fuel consumption, vehicle payload
 * 
 * Input variables:
 * 		machine[mid].technical_data.engine_revolutions
 *		machine[mid].technical_data.fuel_consumption
 *		machine[mid].technical_data.vehicle_payload
 *		machine[mid].technical_data.battery_voltage
 *		machine[mid].technical_data.hydraulic_oil_temperature
 *		machine[mid].technical_data.water_temperature
 *		machine[mid].technical_data.total_machining_hours
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
	angular.module('focusApp.machineDataOverview',
			['focusApp.dataService', 'focusApp.navigationService' ])

	.controller('MachineDataOverviewController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {

				var _self = this;

				/**
				 * Get the id of the currently accessed machine
				 */
				var parts = $location.path().split(/\//);
				_self.currentMachineId = parts[2] || 0;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;
				
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'Technical data - ' + _self.data.machine[_self.currentMachineId].name;

				/**
				 * Helper function to round (too lazy to write a proper filter
				 */
				_self.round = function(i) {
					return Math.round(i);
				};
				
			} ]);

}());


