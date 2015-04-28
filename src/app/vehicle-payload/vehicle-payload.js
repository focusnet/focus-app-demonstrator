/**
 * Vehicle payload
 * 
 * LIGNA scenario: step 15
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
