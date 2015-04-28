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
	angular.module('focusApp.engineRevolution', [ 'focusApp.dataService' ])

	.controller('EngineRevolutionController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
