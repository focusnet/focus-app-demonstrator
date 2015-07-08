/**
 * Controller used to render the notification icon in the mobile app decoration
 * 
 * @@source_header
 * 
 * --
 * 
 * This file is part of the focus-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.notifications', [ 'focusApp.dataService', 'focusApp.inboxService' ])

	.controller('NotificationsController',
			[ 'InboxService', function(InboxService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.inboxSvc = InboxService;

				/**
				 * Ref to data service
				 */
		//		_self.dataSvc = DataService;
				
			} ]);

}());
