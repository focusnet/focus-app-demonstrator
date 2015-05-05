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
			[ '$scope', 'leafletData', "leafletEvents", "DataService", function($scope, leafletData, leafletEvents, DataService) {

				var _self = this;

				_self.dataService = DataService;
console.log("YAY");
console.log(_self.dataService.data);

				leafletData.getMap('mymap').then(function(map) {
					// anything here
					console.log(map);
      //    L.GeoIP.centerMapOnPosition(map, 15);
				});

				// an example of leaflet
				angular.extend(_self, {
					tiles : {
						url : '../content/empty.png'
					},
					center : {
						lat : 51.395876, 
						lng : 8.264026,
						zoom : 16.65	
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
						forwarder1: {
							// lat:  parseFloat("51.395822"), 
							// lng:  parseFloat("8.265015"),
						    lat: parseFloat(_self.dataService.data.machine[3].lat), //data.machine[3].lat
							lng: parseFloat(_self.dataService.data.machine[3].long), //data.machine[3].lng
						    message: "forloader 1",
						 //    icon: {
							//     iconUrl: '../content/fourloader.png',
							//     iconRetinaUrl: '../content/fourloader.org.png',
							//     iconSize: [26, 26],
							//     iconAnchor: [13, 13],
							//     // popupAnchor: [-3, -76],
							//     // shadowUrl: 'my-icon-shadow.png',
							//     // shadowRetinaUrl: 'my-icon-shadow@2x.png',
							//     // shadowSize: [68, 95],
							//     // shadowAnchor: [22, 94]
							// },
						},
						// forwarder2: {
						// 	lat:  51.395822, 
						// 	lng:  8.265015,
						// 	message: "forloader 2",
						// },
						// forwarder3: {
						// 	lat: 51.396810, 
						// 	lng:  8.264705,
						// 	message: "forloader 3", 
						// },
						// forwarder4: {
						// 	lat: 51.395876, 
						// 	lng:  8.264026,
						// 	message: "forloader 4 <a ng-href='#/machine/123'>details</a>",
						// },
						// loadingpoint1: {
						// 	lat: 51.39592091832327, 
						// 	lng:  8.26235430890226,
						// },
						// loadingpoint2: {
						// 	lat: 51.397260998822276, 
						// 	lng:  8.264099021820796,
						// },
					},
					paths: {
                        border1: {
                            // color: '#2ecc71',
                            color: '#d35400',
                            stroke: true,
		                    type: 'polygon',
		                    weight: 3,
		                    fillOpacity: 0,
                            latlngs: [ 
                            	{lat: 51.39737042612127, lng: 8.265578234630878},
                            	{lat: 51.395773408278536, lng: 8.265058584365962},
                            	{lat: 51.394872367939236, lng: 8.26461199151194},
                            	{lat: 51.3939702844268, lng: 8.2640800302795},
                            	{lat: 51.394619053628155, lng: 8.263570279836239},
                            	{lat: 51.395446903071154, lng: 8.262765514249338},
                            	{lat: 51.395859281834717, lng: 8.262601578581714},
                            	{lat: 51.396348235903311, lng: 8.262870435596566},
                            	{lat: 51.39668804690232, lng: 8.263697118852569},
                            	{lat: 51.397220042123358, lng: 8.264207222264286},
                            	{lat: 51.39737042612127, lng: 8.265578234630878},
                            ]
                        },
                        border2: {
                            // color: '#3498db',
                            stroke: false,
		                    fillColor: '#27ae60',
		                    type: 'polygon',
		                    weight: 1,
		                    fillOpacity: 0.7,
                            latlngs: [ 
                            	{lat: 51.397348752820228, lng: 8.265549152820293},
                            	{lat: 51.395835356992293, lng: 8.265030728048135},
                            	{lat: 51.395831825608113, lng: 8.262628384481282},
                            	{lat: 51.396335007585442, lng: 8.26290112823332},
                            	{lat: 51.396672203142465, lng: 8.263710707648491},
                            	{lat: 51.397202152573357, lng: 8.264223564250905},
                            	{lat: 51.397348752820228, lng: 8.265549152820293},
                            ]
                        },
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
				        	// console.log(event.targetScope.markers);
				        	// console.log(event.targetScope.$$nextSibling.$id);
				        	// console.log(event);
				        	// location.href="#/machine/123"
				        	// console.log(event.latlng);

                // console.log(lattenberg);
				        }
				    });
				}

				// END OF FIXME DEBUG

			} ]);

}());