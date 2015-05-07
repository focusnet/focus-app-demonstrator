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
			['focusApp.dataService','gridshore.c3js.chart'])

	.controller('FuelConsumptionController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				 _self.datapoints=[
				 	{"x":10,"top-1":10,"top-2":15},
                     {"x":20,"top-1":100,"top-2":35},
                     {"x":30,"top-1":15,"top-2":75},
                     {"x":40,"top-1":50,"top-2":45}
                 ];
                 _self.datacolumns=[
                 	{"id":"top-1","type":"line"},
                     {"id":"top-2","type":"spline"}
                 ];
    			
     			_self.datax={"id":"x"};



			//	 END OF FIXME DEBUG

			} ]);



}());
