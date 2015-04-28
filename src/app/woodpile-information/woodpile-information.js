/**
 * Woodpile information
 * 
 * LIGNA scenario: step 10
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.woodpileInformation', [ 'focusApp.dataService' ])

	.controller('WoodpileInformationController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
