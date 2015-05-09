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
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.terrainOverview',
			[ 'leaflet-directive', 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('TerrainOverviewController',
			[ '$scope', 'leafletData', 'DataService', 'NavigationService', function($scope, leafletData, DataService, NavigationService) {

				var _self = this;
				_self.testvar = parseFloat(DataService.data.machine[3].lat);
				
				_self.dataService = DataService;


				
				// set the  page title
				NavigationService.currentTitle = 'Terrain overview - ' + DataService.data.areaname;
				
				var redMarker;

				/**
				 * Setup awesome markers
				 */
				leafletData.getMap('TerrainOverviewMap').then(function(map) {
      				L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
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
						dragging: false,
						touchZoom: false,
						doubleClickZoom: false,
					},
					markers : {
						forwarder0: {
						 	lat: parseFloat(_self.dataService.data.machine[0].lat),
							lng: parseFloat(_self.dataService.data.machine[0].lng),
						    message: "<strong>"+_self.dataService.data.machine[0].name+"</strong> <br> Harvester",
						    focus: false,
						    icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-square',
							    markerColor: 'blue'
							},
						},
						forwarder1: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[1].lat),
							lng: parseFloat(_self.dataService.data.machine[1].lng),
							message: "<strong>"+_self.dataService.data.machine[1].name+"</strong> <br> Harvester",
							focus: false,
						    icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-square',
							    markerColor: 'blue'
							},
						},
						forwarder2: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[2].lat),
							lng: parseFloat(_self.dataService.data.machine[2].lng),
							message: "<strong>"+_self.dataService.data.machine[2].name+"</strong> <br> Forwarder",
							focus: false,
						    icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-dot-circle-o',
							    markerColor: 'red'
							}, 
						},
						forwarder3: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[3].lat),
							lng: parseFloat(_self.dataService.data.machine[3].lng),
							message: "<strong>"+_self.dataService.data.machine[3].name+"</strong> <br> Forwarder <a ng-href='#/machine/3'>details</a>",
							focus: false,
						    icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-dot-circle-o',
							    markerColor: 'red'
							},
						},
						loadingpoint1: {
							markerColor: '#27ae60',
							lat: parseFloat(_self.dataService.dataSet.timeindependent.woodpile[0].lat), 
							lng:  parseFloat(_self.dataService.dataSet.timeindependent.woodpile[0].lng),
							message: "<strong>Woodpile #"+_self.dataService.data.woodpile[0].timber_pile_number+"</strong> <br> <a ng-href='#/woodpile/0'>details</a>",
							focus: false,
						    icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-bullseye',
							    markerColor: 'green'
							},
						},
						loadingpoint2: {
							markerColor: '#27ae60',
							lat: parseFloat(_self.dataService.dataSet.timeindependent.woodpile[1].lat), 
							lng:  parseFloat(_self.dataService.dataSet.timeindependent.woodpile[1].lng),
							message: "<strong>Woodpile #"+_self.dataService.data.woodpile[1].timber_pile_number+"</strong> <br> <a ng-href='#/woodpile/1'>details</a>",
							focus: false,
							icon: {
							    type: 'awesomeMarker',
							    icon: 'fa-bullseye',
							    markerColor: 'green'
							},
						},
					},
					paths: {
                        border1: {
                            // color: '#2ecc71',
                            color: '#ecf0f1',
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
		                    fillColor: '#2ecc71',
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


				});

				/**
				 * Update the drawing of the map
				 */
				_self.drawDynamicData = function() {
					_self.markers.forwarder3.lat = parseFloat(_self.dataService.data.machine[3].lat);
					_self.markers.forwarder3.lng = parseFloat(_self.dataService.data.machine[3].lng);
				};
				
				/**
				 * Register refresh callback
				 */
				DataService.registerRefreshCallback(_self.drawDynamicData);
				
				_self.test = function() {
					// self.dataService.data.machine[3].lat
					_self.dataService.data.machine[3].lat +=1;
					_self.testvar += 1;
					leafletData.getMap('mymap').then(function(map) {
						// anything here
						map._onResize();
	      //    L.GeoIP.centerMapOnPosition(map, 15);
					});
					
				}
				// END OF FIXME DEBUG
				

			} ]);

}());