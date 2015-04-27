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
	function DataService() {

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
		_self.dataIncrement = 0;

		/** FIXME DEBUG test function */
		_self.test = function() {
			console.log('TEST');
		};

	}

	/**
	 * Module definition
	 */
	angular.module('focusApp.dataService', [])

	/**
	 * Service instantiation
	 */
	.service('DataService', [ DataService ])

}());