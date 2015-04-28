/**
 * Stand information
 * 
 * LIGNA scenario: step 7
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.standInformation', [ 'focusApp.dataService' ])

	.controller('StandInformationController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
