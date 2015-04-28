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
			[ 'leaflet-directive', 'angular-flot', 'focusApp.dataService' ])

	.controller('TerrainOverviewController',
			[ '$scope', 'DataService', function($scope, DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

				// on _Self -> can use ctrl.xxxx
				_self.data2 = [ {
					label : "Foo2",
					data : [ [ 10, 1 ], [ 17, -14 ], [ 30, 5 ] ]
				}, {
					label : "Bar2",
					data : [ [ 11, 13 ], [ 19, 11 ], [ 30, -7 ] ]
				} ];
				
				_self.options2 = {
					series : {
						lines : {
							show : true
						},
						points : {
							show : true
						}
					}
				};

				// an example of leaflet
				angular.extend(_self, {
					tiles : {
						url : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					},
					xcenter : {
						lat : 30.095,
						lng : -33.823,
						zoom : 4
					},
					defaults : {
						scrollWheelZoom : false
					}

				});

				
				// END OF FIXME DEBUG

			} ]);

}());
