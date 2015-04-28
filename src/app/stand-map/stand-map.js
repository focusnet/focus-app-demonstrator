/**
 * Stand map
 * 
 * LIGNA scenario: step 9
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.standMap', [ 'focusApp.dataService' ])

	.controller('StandMapController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
