/**
 * Service responsible for managing the notification inbox
 * 
 * @@source_header
 */

'use strict';

(function() {

	/**
	 * Notification Inbox service singleton definition
	 */
	function InboxService() {

		var _self = this;

	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.inboxService', [])

	/**
	 * Service instantiation
	 */
	.service('InboxService', [ InboxService ])

}());