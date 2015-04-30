/**
 * Terrain overview dashboard
 * 
 * LIGNA scenario: step 1
 * 
 * Display description:
 * 		A map depicting the whole area of work
 * 		The map is limited (cannot move to the whole world or zoom/unzoom)
 * 		There is a situation minimap (e.g. Switzerland with administrative borders)
 * 		The map presents layers:
 * 			- aerial view (satellite)
 * 			- geometry (only whole parcel)
 * 			- roads: official ones
 * 			- wood piles: markers -> click -> "More information" | "No information available"
 * 			- Machines (4): markers -> click -> "More information" | "No information available"
 * 				No need to draw the machine trace
 * 		Legend: Machine types (1 icon per machine type)
 * 
 * Input variables:
 * 		parcel geometries 
 *		areacenter.lat
 * 		areacenter.long
 * 		areacenter.zoomfactor = int
 * 		machine[].name
 * 		machine[].type = F | H
 * 		machine[].lat
 * 		machine[].long 
 * 		machine[].status = WORKING | NOT_WORKING
 * 		woodpile[].lat
 * 		woodpile[].long
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.terrainOverview',
			[ 'leaflet-directive', 'angular-flot' ])

	.controller('TerrainOverviewController',
			[ '$scope', 'leafletData', function($scope, leafletData) {

				var _self = this;

				leafletData.getMap('mymap').then(function(map) {
					// anything here
					console.log(map);
      //    L.GeoIP.centerMapOnPosition(map, 15);
				});
				
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
						scrollWheelZoom : false,
						zoomControl: false,
						attributionControl: false,

					}

				});

				// END OF FIXME DEBUG

			} ]);

}());
