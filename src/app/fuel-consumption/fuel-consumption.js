/**
 * Machine's fuel consumption
 * 
 * LIGNA scenario: step 14
 * 
 * Display description: - A chart of the fuel consumption for the current day -
 * a table of the average fuel consumption per hours for the past 8 hours - ??
 * 
 * Input variables: machine[3].technical_data.fuel_consumption
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {

	angular
			.module('focusApp.fuelConsumption',
					[ 'focusApp.dataService', 'ngCanvasGauge' ])

			.controller(
					'FuelConsumptionController',
					[
							'$scope',
							'DataService',
							function($scope, DataService) {

								var _self = this;

								_self.v = 12;
								/**
								 * Reference to the current data sample being rendered
								 */
								_self.data = DataService.data;

							}]);

}());
