/**
 * Machine's engine revolution chart
 * 
 * LIGNA scenario: step 13
 * 
 * Display description: - A chart of engine revolutions for the current day
 * 
 * Input variables: - machine[mid].technical_data.engine_revolutions
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
	angular
			.module('focusApp.engineRevolution',
					[ 'angular-flot', 'focusApp.dataService', 'focusApp.navigationService' ])

			.controller(
					'EngineRevolutionController',
					[
							'$location',
							'DataService',
							'NavigationService',
							function($location, DataService, NavigationService) {

								var _self = this;

								/**
								 * Reference to DataService
								 */
								_self.dataSvc = DataService;

								/**
								 * Get the id of the currently accessed machine
								 */
								var parts = $location.path().split(/\//);
								_self.currentMachineId = parts[2] || 0;

								/**
								 * Reference to the current data sample being
								 * rendered
								 */
								_self.dataSvc = DataService;
								_self.data = DataService.data;
								_self.dataMachine = DataService.data.machine[_self.currentMachineId];

								/**
								 * Set the title of the page
								 */
								NavigationService.currentTitle = 'Engine revolutions - '
										+ _self.dataMachine.name;

								/**
								 * Table with latest values
								 */
								_self.last_values = [];

								/**
								 * rounding helper function
								 */
								_self.round = function(i) {
									return Math.round(i);
								};
								
								/**
								 * Initialize everything.
								 */
								var _init = function() {

									// infer max value for yAxis
									var max_value = 1700 * 1.15;
									angular
											.forEach(
													DataService.dataSet.timedependent['<TIME:machine['
															+ _self.currentMachineId
															+ '].technical_data.engine_revolutions>'],
													function(v) {
														if (v > max_value) {
															max_value = v * 1.3;
														}
													});

									// init data array
									_self.chartData = [
											{
												label : ' Engine revolutions: '
														+ _self.dataMachine.name,
												color : '#4444ff',
												data : [ [
														DataService.startDateTime
																.getTime(), 0 ] ]
											},
											{
												label : ' Warning',
												color : '#ffff00',
												data : [ [
														DataService.startDateTime
																.getTime(), 1250 ] ]
											},
											{
												label : ' Danger',
												color : '#ff0000',
												data : [ [
														DataService.startDateTime
																.getTime(), 1700 ] ]
											} 
											
											];

									// init chart options
									_self.chartOptions = {
										series : {
											lines : {
												show : true
											},
											points : {
												show : false
											},
										},
										xaxis : {
											show : true,
											mode : "time",
											timezone : "browser",
											ticks : 6
										},
										yaxis : {
											min : 0,
											max : max_value
										},
										legend : {
											position : 'nw',
											margin : [ 12, 6 ]
										},
										grid : {
											labelMargin : 12

										}
									};
								};
								_init();

								/**
								 * Update the drawing of the map
								 */
								_self.drawDynamicData = function() {

									// we store the new data in a tmp array,
									// otherwise flot/angularjs will try to
									// update the view on every data change
									// and that's very CPU demanding
									var new_data = [ [], [], [] ];

									var TOTAL_SPAN_IN_INCREMENTS = 30 * 60 / 2;

									// we want to always display a 30min
									// timeline, so let's fill
									// empty values if necessary
									var num_empty = Math
											.max(
													TOTAL_SPAN_IN_INCREMENTS
															- DataService.currentTimeIncrement,
													0);

									for (var i = num_empty; i > 0; --i) {
										var cur = DataService.startDateTime
												.getTime()
												- 2 * i * 1000;
										new_data[0].push([ cur, null ]);
										new_data[1].push([ cur, 1250 ]);
										new_data[2].push([ cur, 1700 ]);
									}

									for (var i = 0; i < DataService.currentTimeIncrement; ++i) {
										var cur = DataService.startDateTime
												.getTime()
												+ 2 * i * 1000;
										var val = DataService.dataSet.timedependent['<TIME:machine['
												+ _self.currentMachineId
												+ '].technical_data.engine_revolutions>'][i];
										new_data[0].push([ cur, val ]);
										new_data[1].push([ cur, 1250 ]);
										new_data[2].push([ cur, 1700 ]);
									}

									// do fill the new 'last values'
									var last_elem = new_data[0].length - 1;
									_self.last_values = [];
									for (var i = 0; i < 10; ++i) {
										_self.last_values.push({
											date : new_data[0][last_elem - i
													* 30][0],
											value : new_data[0][last_elem - i
													* 30][1]
										});
									}

									angular.copy(new_data[0],
											_self.chartData[0].data);
									angular.copy(new_data[1],
											_self.chartData[1].data);
									angular.copy(new_data[2],
											_self.chartData[2].data);

								};
								_self.drawDynamicData();

								/**
								 * Register refresh callback
								 */
								DataService
										.registerRefreshCallback(_self.drawDynamicData);
							} ]);

}());
