/**
 * Controller diplaying the time machine controls
 * 
 * @@source_header
 */

'use strict';

(function() {

	/**
	 * Module definition
	 */
	angular.module('focusApp.timeMachine', ['focusApp.dataService'])
		.controller('TimeMachineController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.dataService = DataService;
				
				/**
				 * Current local time increment being displayed
				 */
				_self.timeIncrement = DataService.currentTimeIncrement;
				
				
				/**
				 * Everytime we change the time increment, it must trigger the update on the DataService, too
				 */
				_self.updateData = function() {
					console.log('chage ' + _self.timeIncrement);
					DataService.setTimeIncrement(_self.timeIncrement);
				};

			} ]);
	
	
	
//jQuery
	$('a.time-machine').on('click', function(ev) {
		ev.preventDefault();
		$.sidr('close', 'sidr');
		$('#time-machine').slideToggle(100);
	});
//	
//// allow closing when clicking outside of the menu
//	$('body').on("click", function(e) {
////		$('#time-machine').slideUp(100); // FIXME
//	}); 
//
//	$("#time-machine, a.time-machine").on("click", function(e) {
//		// e.preventDefault();
//		// e.stopPropagation();
//	});		
//	
	

}());