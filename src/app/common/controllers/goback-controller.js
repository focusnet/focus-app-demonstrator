/**
 * Controller used to offer a goback functionality
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
	angular.module('focusApp.goBack', [  ])

	.controller('GoBackController',
			[ '$window', function($window) {

				var _self = this;
				
				/**
				 * Go back
				 */
				_self.goBack = function()
				{
					return $window.history.back();
				}
				
			} ]);

}());
