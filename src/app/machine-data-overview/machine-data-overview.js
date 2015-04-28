/**
 * Machine technical data overview
 * 
 * LIGNA scenario: step 12
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.machineDataOverview', [ 'focusApp.dataService' ])

	.controller('MachineDataOverviewController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
