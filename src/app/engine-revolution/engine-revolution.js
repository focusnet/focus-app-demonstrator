/**
 * Machine's engine revolution chart
 * 
 * LIGNA scenario: step 13
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
