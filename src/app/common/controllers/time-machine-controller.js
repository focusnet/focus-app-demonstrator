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
			[ '$interval', 'DataService', function($interval, DataService) {

				var _self = this;

				/**
				 * Move to next increment at the following frequency
				 */
				_self.update_frequency = 500;
				
				/**
				 * Do update the data every 2 seconds
				 */
				$interval(function() {
					if (_self.isRunning && !_self.temporaryPause) {
						_self.timeIncrement = _self.dataService.currentTimeIncrement + 1;
						_self.dataService.setTimeIncrement(_self.timeIncrement);
					}
				}, _self.update_frequency);

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.dataService = DataService;
				
				/**
				 * Is the time machine currently running?
				 */
				_self.isRunning = false;
				
				/**
				 * When sliding the control, we temporarily pause the update of data. Otherwise we would get
				 * inconsistent behaviors.
				 */
				_self.temporaryPause = false;
				
				/**
				 * Current local time increment being displayed
				 */
				_self.timeIncrement = DataService.currentTimeIncrement;
				
				/**
				 * Displayed date
				 */
				_self.currentDate = function() {
					return DataService.getFutureDate(_self.timeIncrement);
				};
				
				/**
				 * Everytime we change the time increment, it must trigger the update on the DataService, too
				 */
				_self.updateData = function() {
					DataService.setTimeIncrement(_self.timeIncrement);
					_self.temporaryPause = false;
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