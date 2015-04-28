/**
 * Time control
 * 
 * LIGNA scenario: step 11
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.timeControl', [ 'focusApp.dataService' ])

	.controller('TimeControlController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
