// angular.module('myApp', ['gettext']);
/**
 * @file workflow-editor.js
 * 
 * Angular main module definition for our Workflow Editor application. This is
 * the entry point.
 * 
 * @@source_header
 */

'use strict';

(function() {

	angular.module('focusApp', [ 'ngRoute', 'gettext', 'ui.bootstrap' ])

	/**
	 * Configuration of our application
	 */
	.config([ '$routeProvider', function($routeProvider) {

		// router configuration
		$routeProvider.when('/', {
			templateUrl : 'app/workflow-listing/workflow-listing.tpl.html'
		}).when('/application/documentation', {
			templateUrl : 'app/documentation/documentation.tpl.html'
		}).when('/application/system-status', {
			templateUrl : 'app/system-diagnosis/system-diagnosis.tpl.html'
		}).when('/application/datafunction/list', {
			templateUrl : 'app/datafunction-listing/datafunction-listing.tpl.html'
		}).when('/application/datafunction/new', {
			templateUrl : 'app/datafunction-new/datafunction-new.tpl.html'
		}).when('/application/datafunction/:dfid/edit', {
			templateUrl : 'app/datafunction-edit/datafunction-edit.tpl.html'
		}).when('/application/datafunction/:dfid', {
			redirectTo : '/application/datafunction/:dfid/edit'
		}).when('/workflow/new', {
			templateUrl : 'app/workflow-new/workflow-new.tpl.html'
		}).when('/workflow/:wid/general', {
			templateUrl : 'app/workflow-general/workflow-general.tpl.html'
		}).when('/workflow/:wid', {
			redirectTo : '/workflow/:wid/general'
		}).when('/workflow/:wid/configure-steps', {
			templateUrl : 'app/workflow-configure/workflow-configure.tpl.html'
		})
		/*
		 * .when('/workflow/:wid/simulate', { templateUrl:
		 * 'app/workflow-simulate/workflow-simulate.tpl.html', controller:
		 * 'SimulateWorkflowController as simulCtrl' // FIXME TODO })
		 */
		.when('/workflow/:wid/execution', {
			templateUrl : 'app/workflow-execution/workflow-execution.tpl.html'
		}).when('/workflow/:wid/debug', {
			templateUrl : 'app/workflow-debug/workflow-debug.tpl.html'
		}).otherwise({
			redirectTo : '/'
		});

	} ])

	/**
	 * Run
	 */
	.run(function(gettextCatalog) {
		gettextCatalog.debug = true; // prepend MISSING if not translated
		gettextCatalog.setCurrentLanguage('fr-FR');

	});

}());