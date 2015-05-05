/**
 * Notification inbox
 * 
 * LIGNA scenario: steps 5-6
 * 
 * Display description:
 * 		1. A list of notifications
 * 		2. One of the notifications can be clicked, then a message is displayed:
 * 			- Subject: Delay
 * 			- Task: Forwarding, HSM208F
 * 			- comment input field
 * 			- Approve or Deny buttons
 * 		3. When the user Approves or Denies, message is closed (like if sent) and 
 * 				notification icon is removed from top bar
 * 
 * Input variables:
 * 		inbox.delay_notification.subject
 *		inbox.delay_notification.task
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
				_self.dataService = DataService;
				// _self.dataService.dataSet // whole data arrays 
				// _self.dataService.data  // current increment data
				

			} ]);

}());


