/**
 * Controller used to render the date and time in the mobile app decoration
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.dateDisplay', [ 'focusApp.dataService' ])

	.controller('DateDisplayController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;
				
				/**
				 * Current date to display
				 */
				_self.display_datetime = 'Monday 23.03.2015 13:31';

			} ]);

}());
