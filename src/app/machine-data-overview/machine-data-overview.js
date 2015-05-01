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
 */

'use strict';

(function() {
	angular.module('focusApp.machineDataOverview',
			['focusApp.dataService' ])

	.controller('MachineDataOverviewController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;


			} ]);

}());


