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
 * 
 * WARNING FIXME TODO
 * 	data not taken from JSON (too complex)
 * 
 * --
 * 
 * This file is part of the focus-mobile-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */


'use strict';

(function() {
	angular.module('focusApp.standInformation', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('StandInformationController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				/**
				 * Get the id of the currently accessed machine
				 */
				var parts = $location.path().split(/\//);
				_self.currentStandId = parts[2] || 0;
				
				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data.stand[_self.currentStandId];

				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'Stand information' + _self.data.name

			} ]);

}());
