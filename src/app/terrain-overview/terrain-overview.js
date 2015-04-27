/**
 * Terrain overview dashboard
 * 
 * LIGNA scenario: step 1
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.terrainOverview',
			[ 'leaflet-directive', 'focusApp.dataService' ])

	.controller('TerrainOverviewController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				// an example of leaflet
				angular.extend($scope, {
					center : {
						lat : 40.095,
						lng : -3.823,
						zoom : 4
					},
					defaults : {
						scrollWheelZoom : false
					}
				});

			} ]);

}());
