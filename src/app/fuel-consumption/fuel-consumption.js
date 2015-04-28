/**
 * Machine's fuel consumption
 * 
 * LIGNA scenario: step 14
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.fuelConsumption', [ 'focusApp.dataService' ])

	.controller('FuelConsumptionController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
