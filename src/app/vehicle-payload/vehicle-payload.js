/**
 * Vehicle payload
 * 
 * LIGNA scenario: step 15
 * 
 * Display description:
 * 		- A chart of the vehicle payload for the current day
 * 
 * Input variables:
 * 		- machine[mid].technical_data.vehicle_payload
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.vehiclePayload', [ 'focusApp.dataService' ])

	.controller('VehiclePayloadController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
