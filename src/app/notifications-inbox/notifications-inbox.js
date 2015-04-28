/**
 * Notification inbox
 * 
 * LIGNA scenario: steps 5-6
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.notificationsInbox', [ 'focusApp.dataService' ])

	.controller('NotificationsInboxController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
