/**
 * Machine's fuel consumption
 * 
 * LIGNA scenario: step 14
 * 
 * Display description:
 * 		- A chart of the fuel consumption for the current day
 * 		- a table of the average fuel consumption per hours for the past 8 hours
 * 		- ??
 * 
 * Input variables:
 * 		machine[3].technical_data.fuel_consumption
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.fuelConsumption',
			['angular-flot', 'focusApp.dataService' ])

	.controller('FuelConsumptionController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				// on _Self -> can use ctrl.xxxx
				_self.data2 = [ {
					label : "Fuel Consumption",
					data : [ [10,1] , [20,-14], [30,5] , [40,5] , [50,14] , [60,0] , [70,5] , [80,7] , [90,3], [100,2] ] // add machine[3].technical_data.fuel_consumption
				}, 
				// {
				// 	label : "Bar2",
				// 	data : [ [ 11, 13 ], [ 19, 11 ], [ 30, -7 ] ]
				// } 
				];
				
				_self.options2 = {
					series : {
						lines : {
							show : true
						},
						points : {
							show : false
						}
					}
				};

				// END OF FIXME DEBUG

			} ]);

}());

