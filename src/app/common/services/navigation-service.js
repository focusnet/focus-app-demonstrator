/**
 * Service responsible for managing the navigation within the application
 * 
 * @@source_header
 */

'use strict';

(function() {

	/**
	 * Navigation service singleton definition
	 */
	function NavigationService() {

		var _self = this;
		
		/**
		 * The title of the current page
		 */
		_self.currentTitle = 'FOCUS demonstrator';
		

	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.navigationService', [])

	/**
	 * Service instantiation
	 */
	.service('NavigationService', [ NavigationService ])

}());