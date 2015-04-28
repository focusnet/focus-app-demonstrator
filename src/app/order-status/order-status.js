/**
 * Machine order status
 * 
 * LIGNA scenario: step 4
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.orderStatus', [ 'focusApp.dataService' ])

	.controller('OrderStatusController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
