/**
 * Vehicle payload
 * 
 * LIGNA scenario: step 15
 * 
 * Display description: - A chart of the vehicle payload for the current day
 * 
 * Input variables: - machine[mid].technical_data.vehicle_payload
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.vehiclePayload', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('VehiclePayloadController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {

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
				 * Reference to the current data sample being rendered
				 */
				_self.dataSvc = DataService;
				_self.data = DataService.data;
				_self.dataMachine = DataService.data.machine[_self.currentMachineId];
	
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'Vehicle payload - ' + _self.dataMachine.name;

				/**
				 * Initialize everything.
				 */
				var _init = function() {
					
					// infer max value for yAxis
					var max_value = 10000 * 1.3;
					angular
							.forEach(
									DataService.dataSet.timedependent['<TIME:machine[' + _self.currentMachineId + '].technical_data.vehicle_payload>'],
									function(v) {
										if (v > max_value) {
											max_value = v * 1.3;
										}
									});
					
					// init data array
					_self.chartData = [ {
						label : ' Payload: ' + _self.dataMachine.name,
						color: '#4444ff',
						data : [ [ DataService.startDateTime.getTime(), 0 ] ]
					},
					{
						label : ' Overload threshold',
						color: '#ff0000',
						data : [ [ DataService.startDateTime.getTime(), 10000 ] ]
					}];
					
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
								timezone : "browser"
							},
							yaxis : {
								min : 0,
								max : max_value
							},
							legend: {
								position: 'nw'
							}
						};
				};
				_init();
		


				/**
				 * Update the drawing of the map
				 * 
				 * FIXME start of time is incorrect !!!! 
				 */
				_self.drawDynamicData = function() {

					angular.copy([], _self.chartData[0].data);

					var TOTAL_SPAN_IN_INCREMENTS = 30 * 60 / 2;

					// we want to always display a 30min timeline, so let's fill
					// empty values if necessary
					var num_empty = Math.max(TOTAL_SPAN_IN_INCREMENTS	- DataService.currentTimeIncrement, 0);

					for (var i = num_empty; i > 0; --i) {
						var cur = DataService.startDateTime.getTime() - 2 * i	* 1000;
						_self.chartData[0].data.push([ cur, null ]);
						_self.chartData[1].data.push([ cur, 10000 ]);
					}

					for (var i = 0; i < DataService.currentTimeIncrement; ++i) {
						var cur = DataService.startDateTime.getTime() + 2 * i	* 1000;
						var val = DataService.dataSet.timedependent['<TIME:machine[' + _self.currentMachineId + '].technical_data.vehicle_payload>'][i];
						_self.chartData[0].data.push([ cur, val ]);
						_self.chartData[1].data.push([ cur, 10000 ]);
					}
				};
				_self.drawDynamicData();

				/**
				 * Register refresh callback
				 */
				DataService.registerRefreshCallback(_self.drawDynamicData);

			} ]);

}());
