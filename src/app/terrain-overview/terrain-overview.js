/**
 * Terrain overview dashboard
 * 
 * LIGNA scenario: step 1
 * 
 * General display:
 * 		A map depicting the whole area of work
 * 		The map is limited (cannot move to the whole world or zoom/unzoom)
 * 		There is a situation minimap (e.g. Switzerland with administrative borders)
 * 		The map presents layers:
 * 			- aerial view (sattelite)
 * 			- roads
 * 			- woodpiles: markers -> click -> "More information" | "No information available"
 * 			- Machines (4): markers -> click -> "More information" | "No information available"
 * 				No need to draw the machine trace
 * 		Legend: Machine types (1 icon per machine type)
 * 
 * Input:
 * 		
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
					center : {
						lat : 51.393662, 
						lng : 8.263858,
						zoom : 13
					},
					defaults : {
						zoomControl: false,
						attributionControl: false,
						tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
						tileLayerOptions: {
                        	opacity: 0.9,
                        	detectRetina: true,
                        	reuseTiles: true,
                    	},
					},
					baselayers: {
				        // osm: {
				        //     name: 'OpenStreetMap',
				        //     url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				        //     type: 'xyz'
				        // },
				        // cloudmade: {
				        //     name: 'Cloudmade Tourist',
				        //     type: 'xyz',
				        //     url: 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png',
				        //     layerParams: {
				        //         key: '007b9471b4c74da4a6ec7ff43552b16f',
				        //         styleId: 7
				        //     }
				        // }
				    }

				});

				// END OF FIXME DEBUG

			} ]);

}());
