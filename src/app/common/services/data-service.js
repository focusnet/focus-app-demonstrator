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
		_self.currentIncrement = 0;

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
			});
		};

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