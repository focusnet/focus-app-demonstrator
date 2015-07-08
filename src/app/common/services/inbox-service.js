/**
 * Service responsible for managing the notification inbox
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

	/**
	 * Notification Inbox service singleton definition
	 */
	function InboxService(DataService) {

		var _self = this;
		
		/**
		 * Number of unread messages
		 */
		_self.number_of_unread_messages = 0;
		
		/**
		 *  Static messages (for decoration
		 */
		_self.messages = [
			{
				reception_datetime_from_simulation_starttime: -60*60*4,
				subject: 'Delay?',
				task: 'Forwarding, HSM 208F',
				comment: 'Problem with engine',
				submit: 'approved'
			},
			{
				reception_datetime_from_simulation_starttime: -86400-60*(60*4*2+15),
				subject: 'Delay?',
				task: 'Forwarding, HSM 208F',
				comment: 'Problem with engine',
				submit: 'denied'
			},
			{
				reception_datetime_from_simulation_starttime: -3*86400-500,
				subject: 'Delay?',
				task: 'Forwarding, HSM 208F',
				comment: '',
				submit: 'approved'
			},
			{
				reception_datetime_from_simulation_starttime: -4*86400-500-20340,
				subject: 'Sticking to the schedule?',
				task: 'Forwarding, HSM 208F',
				comment: '',
				submit: 'denied'
			},
			{
				reception_datetime_from_simulation_starttime: -4*86400-500-20340-10202,
				subject: 'Sticking to the schedule?',
				task: 'Forwarding, HSM 208F',
				comment: '',
				submit: 'approved'
			},
			{
				reception_datetime_from_simulation_starttime: -5*86400-500-20340-16022,
				subject: 'Delay?',
				task: 'Forwarding, HSM 208F',
				comment: '',
				submit: 'approved'
			},
			{
				reception_datetime_from_simulation_starttime: -7*86400-1500-340,
				subject: 'Delay?',
				task: 'Forwarding, HSM 208F',
				comment: 'Problem with engine',
				submit: 'approved'
			},
			{
				reception_datetime_from_simulation_starttime: -9*86400-6500-340,
				subject: 'Sticking to the schedule?',
				task: 'Forwarding, HSM 208F',
				comment: '',
				submit: 'denied'
			}
		];
		
		/**
		 * Init by taking the messages in the DataService and add them to our messages collection
		 */
		_self.init = function() {
			angular.forEach(DataService.data.inbox.delay_notification, function(v) {
				v.unread = v.unread || true;
				_self.messages.unshift(v);
				if (v.unread) {
					_self.number_of_unread_messages += 1;
				}
			});
		};
	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.inboxService', ['focusApp.dataService'])

	/**
	 * Service instantiation
	 */
	.service('InboxService', [ 'DataService', InboxService ])

}());