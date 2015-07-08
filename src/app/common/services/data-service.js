/**
 * Service responsible for delivering data to the different controllers
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
	 * Data provider singleton definition
	 */
	function DataService($rootScope, $route, $q, $http, leafletEvents) {

		var _self = this;
		/**
		 * The complete data set being used in the application
		 */
		_self.dataSet = {
			geometries : {},
			timedependent : {},
			timeindependent : {}
		};

		/**
		 * The data sample currently being rendered by the application
		 */
		_self.data = {};

		/**
		 * The current data increment being rendered by the application
		 */
		_self.currentTimeIncrement = 0;

		/**
		 * Current user-friendly date
		 */
		_self.datetime = {value:''};
		
		/**
		 * Max increment value that is possible
		 */
		_self.maxTimeIncrement = 0;

		/**
		 * STart time of the script
		 */
		_self.startDateTime = new Date();
		
		/**
		 * Refresh callbacks to be called on specific routes
		 */
		_self.callbacks = {};
		
		/**
		 * Get a date in the future (by n increments)
		 */
		_self.getFutureDate = function(increment) {
			return new Date(_self.startDateTime.getTime() + increment * 2 * 1000);
		};
		
		/**
		 * Initialize everything: - load the data of the scenario
		 * 
		 */
		_self.init = function() {
				
			// load geometries
			var geometries = $http.get('scenarios/ligna-001-geometries.json').success(
					function(data) {
						var geom = {
							borders : [],
							loadingpoints : [],
							roads : []
						};

						var geom = {};
						angular.forEach(data, function(v, k) { // k = object name
							geom[k] = [];							
							angular.forEach(v.features, function(f, k2) { // k2 = elements part of the object
								
								if (f.geometry.type == 'Point') {
									geom[k].push({
										lat: parseFloat(f.geometry.coordinates[1]),
										lng: parseFloat(f.geometry.coordinates[0])
									});
								} 
								else if (f.geometry.type == 'LineString') {
									
									geom[k][k2] = {};
									var ctr = 0;
									angular.forEach(f.geometry.coordinates, function(c, k3) {
										geom[k][k2][ctr] = {
											lat : parseFloat(c[1]),
											lng : parseFloat(c[0])
										};
										++ctr;
									});
								}
								
								else if (f.geometry.type == 'Polygon') {
									var ctr = 0;
									geom[k][k2] = {};
									angular.forEach(f.geometry.coordinates[0], function(c, k3) {
										geom[k][k2][ctr] = {
											lat : parseFloat(c[1]),
											lng : parseFloat(c[0])
										};
										++ctr;
									});
								}
							});

							// only one? then store as otherwise as array
							if (geom[k].length == 1) {
								geom[k] = geom[k][0];
							}
						});
						angular.copy(geom, _self.dataSet.geometries);
					});
			
			// load raw data
			var raw_data = $http
					.get('scenarios/ligna-001-data.json')
					.success(
							function(data) {
								angular.copy(data.timedependent, _self.dataSet.timedependent);
								angular.copy(data.timeindependent, _self.dataSet.timeindependent);

								_self.maxTimeIncrement = _self.dataSet.timedependent['<TIME:time_increment>'].length - 1;
								
								// set the initial increment
								_self.setTimeIncrement(0);
							});
			
			var promises = [geometries, raw_data];
			return $q.all(promises);
		};

		/**
		 * Register refresh call back
		 */
		_self.registerRefreshCallback = function(c) {
			_self.callbacks[$route.current.originalPath] = c;
		}
		
		/**
		 * Run callbacks
		 * 
		 * FIXME not sure that's the best way to do it. Perhaps can be done by $watch-ing data?
		 */
		_self.runCallbacks = function() {
			if (_self.callbacks[$route.current.originalPath]) {
				_self.callbacks[$route.current.originalPath]();
			}
		};
		
		/**
		 * Adjust the time increment to some value
		 */
		_self.setTimeIncrement = function(increment) {			
			increment %= _self.maxTimeIncrement + 1;
			
			if (increment == 0) {
					_self.startDateTime = new Date();
			}


			// create a copy of original time-independent data set
			var new_data = angular.copy(_self.dataSet.timeindependent);
	//		new_data.geometries = _self.dataSet.geometries;

			// parse data set and replace all occurences of <TIME> by its
			// timedata[id][increment] value (or modulo'th element)
			_setTimeData(new_data, increment);

			// make the new data set live
			angular.copy(new_data, _self.data);
		
		
			
			_self.currentTimeIncrement = increment;
			_self.datetime = _self.getFutureDate(increment);
			
			_self.runCallbacks();
			
		};

		/**
		 * Update the provided data with the real-time data specified with the
		 * increment.
		 */
		function _setTimeData(data, increment) {
			angular.forEach(data, function(v, k) {
				if (angular.isObject(v) || angular.isArray(v)) {
					_setTimeData(v, increment);
				} else {
					// this is a scaler, let's check it
					if (v.indexOf('<TIME:') === 0) {
						data[k] = _self.dataSet.timedependent[v][increment];
					}
				}
			});
		};
		
		
		/**
		 * Register event that will cause the time machine to stop or start
		 */
	  $rootScope.$on('leafletDirectiveMarker.popupopen', function(event, args) {
	  	_self.popupPauseTimeMachine = true;
    });
    $rootScope.$on('leafletDirectiveMarker.popupclose', function(event, args) {
    	_self.popupPauseTimeMachine = false;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
    	_self.popupPauseTimeMachine = false;
		});
    
	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.dataService', ['ngRoute', 'leaflet-directive'])

	/**
	 * Service instantiation
	 */
	.service('DataService', [ '$rootScope', '$route', '$q', '$http', 'leafletEvents', DataService ])

}());
