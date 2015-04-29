/**
 * Controller used to render the notification icon in the mobile app decoration
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.notifications', [ 'focusApp.dataService' ])

	.controller('NotificationsController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;
				
				/**
				 * Tells whether to display the notification icon or not
				 */
				_self.enabled = true;// FIXME TODO 

			} ]);

}());
