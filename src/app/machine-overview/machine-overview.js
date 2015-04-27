/**
 * Machine overview dashboard
 * 
 * LIGNA scenario: step 3
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.machineOverview', [ 'focusApp.dataService' ])

	.controller('MachineOverviewController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
