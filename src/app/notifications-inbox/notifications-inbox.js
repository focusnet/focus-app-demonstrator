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
	angular.module('focusApp.notificationsInbox', [ 'focusApp.dataService', 'focusApp.navigationService', 'focusApp.inboxService' ])

	.controller('NotificationsInboxController',
			[ 'DataService', 'NavigationService', 'InboxService', function(DataService, NavigationService, InboxService) {

				var _self = this;

				// set the  page title
				NavigationService.currentTitle = 'Notifications inbox';
				
				/**
				 * Reference to the current data sample being rendered
				 */
				_self.dataSvc = DataService;
				
				/**
				 * Inbox service
				 */
				_self.inboxSvc = InboxService;
				
			
				/**
				 * Do we show the modal box?
				 */
				_self.show_modal_box = false;
				
				/**
				 * The modal box being shown
				 */
				_self.modal = {which: -1};
				
				/**
				 * Display the delay message defined by the specified id
				 */
				_self.displayMessage = function(i) {
						if (_self.show_modal_box && _self.modal.which == i) {
							_self.show_modal_box = false;
						}
						else {
							var msg = InboxService.messages[i];
							_self.modal.which = i;
							_self.modal.subject = msg.subject;
							_self.modal.datediff = msg.reception_datetime_from_simulation_starttime; 
							_self.modal.task = msg.task; 
							_self.modal.comment = msg.comment;
							_self.show_modal_box = true;
						}
				};
				
				/**
				 * Register a message submission
				 */
				_self.submit = function(i, action) {
					InboxService.messages[i].submit = action;
					InboxService.messages[i].comment = _self.modal.comment;
					InboxService.messages[i].unread = false;
					InboxService.number_of_unread_messages -= 1;
				};
				
			} ]);

}());


