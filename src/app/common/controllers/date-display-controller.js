/**
 * Controller used to render the date and time in the mobile app decoration
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
	angular.module('focusApp.dateDisplay', [ 'focusApp.dataService' ])

	.controller('DateDisplayController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.dataService = DataService;
				
			} ]);

}());
