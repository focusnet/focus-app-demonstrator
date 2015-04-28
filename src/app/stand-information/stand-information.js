/**
 * Stand information
 * 
 * LIGNA scenario: step 7
 * 
 * Display description:
 * 		- Texts and tables
 * 		- Somehow matching layout/logic of original docx files
 * 
 * Input variables:
 * 		- none. We conditionnally display things in the template file, but no data come 
 * 			from the data model
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
