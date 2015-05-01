/**
 * Machine's engine revolution chart
 * 
 * LIGNA scenario: step 13
 * 
 * Display description:
 * 		- A chart of engine revolutions for the current day
 * 
 * Input variables:
 * 		- machine[mid].technical_data.engine_revolutions
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.engineRevolution',
			['angular-flot', 'focusApp.dataService' ])

	.controller('engineRevolutionController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				// on _Self -> can use ctrl.xxxx
				_self.data2 = [ {
					label : "Engine Revolution",
					data : [ [10,1] , [20,-14], [30,5] , [40,5] , [50,14] , [60,0] , [70,5] , [80,7] , [90,3], [100,2] ] // add machine[mid].technical_data.engine_revolutions
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


