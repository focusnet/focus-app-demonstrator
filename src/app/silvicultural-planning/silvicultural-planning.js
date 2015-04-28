/**
 * Machine's silvicultural planning
 * 
 * LIGNA scenario: step 8
 * 
 * General description:
 * 		- A simple list of tasks
 * 
 * Input variables: 
 * 		machine[mid].tasks[]
 *
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.silviculturalPlanning', [ 'focusApp.dataService' ])

	.controller('SiviculturalPlanningController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
