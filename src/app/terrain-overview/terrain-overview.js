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
			[ 'leaflet-directive', 'focusApp.dataService' ])

	.controller('TerrainOverviewController',
			[ '$scope', 'leafletData', "leafletEvents", function($scope, leafletData, leafletEvents) {

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
					center : {
						lat : 51.393662,
						lng : 8.263858,
						zoom : 16
					},
					defaults : {
						scrollWheelZoom : false,
						zoomControl: false,
						attributionControl: false,
						scrollWheelZoom: true
					},
					markers : {
					    forloader1: {
					        lat: 51.394613,
					        lng:  8.261970,
					        draggable: false,
					        // message: "I'm a draggable marker",
					        focus: true
					    },
					    forloader2: {
					        lat: 51.393086,
					        lng:  8.263386,
					        draggable: false,
					        // message: "I'm a draggable marker",
					        focus: true
					    },
					    forloader3: {
					        lat: 51.395376, 
					        lng:  8.263922,
					        draggable: false,
					        // message: "I'm a draggable marker",
					        focus: true
					    },
					    forloader4: {
					    	lat: 51.393354, 
					        lng:  8.260618,
					        draggable: false,
					        // message: "I'm a draggable marker",
					        focus: true
					    }
					},
					events : {
						markers: {
						    enable: leafletEvents.getAvailableMarkerEvents(),
						}
					}


				});
				var markerEvents = leafletEvents.getAvailableMarkerEvents();
				for (var k in markerEvents){
				    var eventName = 'leafletDirectiveMarker.' + markerEvents[k];
				    $scope.$on(eventName, function(event, args){
				        if (event.name == 'leafletDirectiveMarker.click'){
				        	console.log(event.targetScope.markers);
				        	console.log(event.targetScope.$$nextSibling.$id);
				        	console.log(event);
				        	location.href="#/machine/123"
				        	// console.log(event.latlng);
				        }
				    });
				}

				// END OF FIXME DEBUG

			} ]);

}());

// <script>
//         var app = angular.module("demoapp", ["leaflet-directive"]);
//         app.controller("MarkersEventsController", [ "$scope", "leafletEvents", function($scope, leafletEvents) {

//             $scope.center = {
//                 lat: 51.505,
//                 lng: -0.09,
//                 zoom: 8
//             };

//             $scope.markers = {
//                 london: {
//                     lat: 51.505,
//                     lng: -0.09,
//                     draggable: true,
//                     message: "I'm a draggable marker",
//                     focus: true
//                 }
//             }

//             $scope.events = {
//                 markers: {
//                     enable: leafletEvents.getAvailableMarkerEvents(),
//                 }
//             };

//             $scope.eventDetected = "No events yet...";
//             var markerEvents = leafletEvents.getAvailableMarkerEvents();
//             for (var k in markerEvents){
//                 var eventName = 'leafletDirectiveMarker.' + markerEvents[k];
//                 $scope.$on(eventName, function(event, args){
//                     $scope.eventDetected = event.name;
//                 });
//             }
//         }]);
//     </script>
