/**
 * Controller diplaying the time machine controls
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
	 * Module definition
	 */
	angular
			.module('focusApp.timeMachine', [ 'focusApp.dataService' ])
			.controller(
					'TimeMachineController',
					[
							'$interval',
							'DataService',
							function($interval, DataService) {

								var _self = this;

								/**
								 * Move to next increment at the following frequency
								 */
								_self.update_frequency = 500;

								/**
								 * Do update the data every n milliseconds
								 */
								$interval(
										function() {
											if (_self.isRunning && !_self.temporaryPause
													&& !DataService.popupPauseTimeMachine) {
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
								 * When sliding the control, we temporarily pause the update of
								 * data. Otherwise we would get inconsistent behaviors.
								 */
								_self.temporaryPause = false;

								/**
								 * Current local time increment being displayed
								 */
								_self.timeIncrement = DataService.currentTimeIncrement;

								/**
								 * Are we in tablet mode?
								 */
								_self.is_tablet_mode = false;
								
								/**
								 * Displayed date
								 */
								_self.currentDate = function() {
									return DataService.getFutureDate(_self.timeIncrement);
								};

								/**
								 * Everytime we change the time increment, it must trigger the
								 * update on the DataService, too
								 */
								_self.updateData = function() {
									DataService.setTimeIncrement(_self.timeIncrement);
									_self.temporaryPause = false;
								};

								/**
								 * Start the time machine
								 */
								_self.start = function() {
									DataService.popupPauseTimeMachine = false;
									_self.isRunning = true;
								};

								/**
								 * Stop the time machine
								 */
								_self.stop = function() {
									_self.isRunning = false;
								};
								
								/**
								 * Close the app
								 */
								_self.close = function() {
									console.log('WARNING: does not work on Firefox')
									window.open('', '_self');
									window.close();
								};
								
								/**
								 * Toggle the display mode: tablet or desktop
								 */
								_self.toggleDisplayMode = function() {
									_self.is_tablet_mode = !_self.is_tablet_mode;
									$('body').toggleClass('touch-screen');
								};

								/**
								 * UI-related init
								 */
								var ui_init = function() {
									$('a.time-machine').on('click', function(ev) {
										ev.preventDefault();
										$.sidr('close', 'sidr');
										$('#time-machine').slideToggle(100);
									});
									// allow closing when clicking outside of the menu
									$('body').on("click", function(e) {
										e.preventDefault();
										$('#time-machine').slideUp(100); 
									});
									$("#time-machine, a.time-machine").on("click", function(e) {
										e.stopPropagation();
									});
								}
								ui_init();

							} ]);

}());