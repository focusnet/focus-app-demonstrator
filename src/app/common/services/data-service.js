/**
 * Service responsible for delivering data to the different controllers
 * 
 * @@source_header
 */

'use strict';

(function() {

	/**
	 * Data provider singleton definition
	 */
	function DataService($http) {

		var _self = this;
		/**
		 * The complete data set being used in the application
		 */
		_self.dataSet = {};

		/**
		 * The data sample currently being rendered by the application
		 */
		_self.data = {};

		/**
		 * The current data increment being rendered by the application
		 */
		_self.currentTimeIncrement = 0;

		/**
		 * Initialize everything: 
		 * 
		 * - load the data of the scenario
		 */
		_self.init = function() {
			$http.get('scenarios/ligna-001.json').success(function(data) {
				_self.dataSet = data;
				// set the initial increment
				console.log(data);
				
//				_self.setTimeIncrement(0);
			});
		};
	/*	
		_self.setTimeIncrement = function(increment) {
			// create a copy of original time-independent data set
			var new_data = angular.copy(_self.dataSet.timeindependent);
			
			// parse data set and replace all occurences of <TIME> by its timedata[id][increment] value (or modulo'th element)
			_setTimeData(new_data, increment);
			
			// make the new data set live
			angular.copy(new_data, _self.data);
			_self.currentTimeIncrement = increment;
		};

		function _setTimeData(data, increment) {
			console.log('set timedata');
			angular.forEach(data, function(v,k) {
				if (angular.isObject(v) && !angular.isArray(v)) {
					console.log(v);
					if (is time-enabled) {
						
		//			}
		//			else {
						_setTimeData(v, increment);
		//			}
				}
			});
		};
		*/
	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.dataService', [])

	/**
	 * Service instantiation
	 */
	.service('DataService', [ '$http', DataService ])

}());
