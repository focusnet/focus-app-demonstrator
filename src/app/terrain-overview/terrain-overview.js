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

				var forloader1 = {
				    lat: 51.395068, 
					lng:  8.263694,
				    message: "forloader 1",
				};
				var forloader2 = {
				    lat:  51.395822, 
					lng:  8.265015,
				    message: "forloader 2",
				};
				var forloader3 = {
				    lat: 51.396810, 
				    lng:  8.264705,
				    message: "forloader3 <a id='forloader3massage'> details <script href='#/machine/123'>details</a>", 
				};

				// an example of leaflet
				angular.extend(_self, {
					tileLayer : {
						url : '../content/empty.png'
					},
					center : {
						lat : 51.395876, 
						lng : 8.264026,
						zoom : 17
					},
					defaults : {
						scrollWheelZoom : false,
						zoomControl: false,
						attributionControl: false,
						scrollWheelZoom: false,
						dragging: false,
						touchZoom: false,
						doubleClickZoom: false,
					},
					markers : {
						forloader1: angular.copy(forloader1),
						forloader2: angular.copy(forloader2),
						forloader3: angular.copy(forloader3),
					    // forloader1: {
					    //     lat: 51.395068, 
					    //     lng:  8.263694,
					    //     draggable: false,
					    //     // message: "I'm a draggable marker",
					    //     focus: true
					    // },
					    // forloader2: {
					    //     lat: 51.395822, 
					    //     lng:  8.265015,
					    //     draggable: false,
					    //     // message: "I'm a draggable marker",
					    //     focus: true
					    // },
					    // forloader3: {
					    //     lat: 51.396810, 
					    //     lng:  8.264705,
					    //     draggable: false,
					    //     // message: "I'm a draggable marker",
					    //     focus: true
					    // },
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
				        	// location.href="#/machine/123"
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
