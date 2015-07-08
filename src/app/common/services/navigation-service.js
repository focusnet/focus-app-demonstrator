/**
 * Service responsible for managing the navigation within the application
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