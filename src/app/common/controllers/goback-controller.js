/**
 * Controller used to offer a goback functionality
 * 
 * @@source_header
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
