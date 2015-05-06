/**
 * Stand map
 * 
 * LIGNA scenario: step 9
 * 
 * Display description:
 * 		- map zoomed to the selected stand
 * 		- layers: stand border, road (official), work roads (Gassen), 
 * 			current position of machine with trail, aerial view, other machines
 * 			(one marker type by type of machine)  
 * 		- pictures of the stand (carousel)
 * 		- wood piles: markers -> click -> "More information" | "No information available"
 * 		- machines: markers -> click -> "More information" | "No information available"
 * 
 * Input variables:
 * 		stand geometry
 * 		stand[sid].center.lat
 * 		stand[sid].center.long
 * 		stand[sid].zoomfactor = int
 * 		stand[sid].pictures[]
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
	angular.module('focusApp.standMap',
			[ 'leaflet-directive', 'focusApp.dataService' ])

	.controller('StandMapController',
			[ '$scope', 'leafletData', "DataService", function($scope, leafletData, DataService) {

				var _self = this;

				_self.dataService = DataService;

				var machine3lat = _self.dataService.dataSet.timedependent['<TIME:machine[3].lat>'];
				var machine3lng = _self.dataService.dataSet.timedependent['<TIME:machine[3].long>'];

				leafletData.getMap('StandMapMap').then(function(map) {
					// anything here
					// console.log(map);
      				// L.GeoIP.centerMapOnPosition(map, 15);
				});

				// an example of leaflet
				angular.extend(_self, {
					tiles : {
						url : '../content/empty.png'
					},
					center : {
						lat : 51.396513, 
						lng : 8.264432,
						zoom : 17.65	
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
							markerColor: '#2980b9',
						 	lat: parseFloat(_self.dataService.data.machine[0].long),
							lng: parseFloat(_self.dataService.data.machine[0].lat),
						    message: "forwarder 0",
						},
						forwarder1: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[1].long),
							lng: parseFloat(_self.dataService.data.machine[1].lat),
							message: "forloader 1",
						},
						forwarder2: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[2].long),
							lng: parseFloat(_self.dataService.data.machine[2].lat),
							message: "forloader 2", 
						},
						forwarder3: {
							markerColor: '#2980b9',
							lat: parseFloat(_self.dataService.data.machine[3].lat),
							lng: parseFloat(_self.dataService.data.machine[3].long),
							message: "forloader 3 <a ng-href='#/machine/123'>details</a>",
						},
						loadingpoint1: {
							markerColor: '#27ae60',
							lat: parseFloat(_self.dataService.dataSet.timeindependent.woodpile[0].long), 
							lng:  parseFloat(_self.dataService.dataSet.timeindependent.woodpile[0].lat),
							message: "woodpile 0 <a ng-href='#/woodpile/0'>details</a>",
						},
						loadingpoint2: {
							markerColor: '#27ae60',
							lat: parseFloat(_self.dataService.dataSet.timeindependent.woodpile[1].long), 
							lng:  parseFloat(_self.dataService.dataSet.timeindependent.woodpile[1].lat),
							message: "woodpile 1 <a ng-href='#/woodpile/1'>details</a>",
						},
					},
					paths: {
                        border2: {
		                    color: '#27ae60',
		                   	stroke: true,
		                    type: 'polygon',
		                    weight: 6,
		                    fillOpacity: 0,
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
                        alley2: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.396904115565036, lng: 8.263861897337376},
	                            {lat: 51.396905624104889, lng: 8.264016292739175},
	                            {lat: 51.396918154651068, lng: 8.265299569750967},
	                            {lat: 51.396918693585903, lng: 8.265354795400839},
	                        ],
                    	},
                    	alley3: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.396570747405825, lng: 8.263369160254395},
	                            {lat: 51.396570496115899, lng: 8.263505410907715},
	                            {lat: 51.396567428572304, lng: 8.265161779343954},
	                            {lat: 51.396567282825714, lng: 8.265240164227016},
	                        ],
                    	},
                    	alley4: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.396230343464865, lng: 8.262767548547458},
	                            {lat: 51.396229844704841, lng: 8.262829711493344},
	                            {lat: 51.396212217346616, lng: 8.265024062832648},
	                            {lat: 51.39621141292092, lng: 8.265124080273072},
	                        ],
                    	},
                    	alley5: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.395299781410479, lng: 8.262873958506407},
	                            {lat: 51.395318215518905, lng: 8.262887791416459},
	                            {lat: 51.395857217787629, lng: 8.263292262841729},
	                            {lat: 51.395878772214637, lng: 8.263308437667238},
	                        ],
                    	},
                    	alley6: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.394914147091711, lng: 8.263259476626505},
	                            {lat: 51.394932952247125, lng: 8.263269540377562},
	                            {lat: 51.395864119868435, lng: 8.263767874084232},
	                            {lat: 51.395875927573499, lng: 8.263774193359355},
	                        ],
                    	},
                    	alley7: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.394480152082792, lng: 8.26369333150946},
	                            {lat: 51.39447265469213, lng: 8.263718316820059},
	                            {lat: 51.394336454868586, lng: 8.264172202857933},
	                            {lat: 51.394321070655096, lng: 8.264223470223888},
	                        ],
                    	},
                    	alley8: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.394462943390387, lng: 8.26375068002646},
	                            {lat: 51.394495394567116, lng: 8.26376814130653},
	                            {lat: 51.395841079066834, lng: 8.264492248030864},
	                            {lat: 51.395871438456098, lng: 8.264508584795133},
	                        ],
                    	},
                    	alley9: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.395883218468747, lng: 8.262579840377347},
	                            {lat: 51.395883059900349, lng: 8.26260583738501},
	                            {lat: 51.395869786823496, lng: 8.264778592186323},
	                            {lat: 51.395898224342957, lng: 8.265021920373803},
	                            {lat: 51.397323014508693, lng: 8.265486688209529},
	                            {lat: 51.397364941093876, lng: 8.265500365140475},
	                        ],
                    	},
                    	alley10: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.397202655787424, lng: 8.264845576112458},
	                            {lat: 51.396995290088192, lng: 8.264724712700776},
	                            {lat: 51.395869820653601, lng: 8.264068751353394},
	                            {lat: 51.394699857904605, lng: 8.26347089522325},
	                            {lat: 51.393981152434847, lng: 8.26402016236962},
	                            {lat: 51.394985168545325, lng: 8.26462068183042},
	                            {lat: 51.395884859272904, lng: 8.265036474587264},
	                        ],
                    	},
                    	alley11: {
	                        color: 'red',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.394480152082792, lng: 8.263693331509453},
	                            {lat: 51.394695417950935, lng: 8.263478136383513},
	                            {lat: 51.395315000820645, lng: 8.262858743521647},
	                            {lat: 51.395878394637663, lng: 8.262577231907146},
	                            {lat: 51.396341968959213, lng: 8.262827910773478},
	                            {lat: 51.396706215549408, lng: 8.263689659330572},
	                            {lat: 51.397215851805342, lng: 8.264133213695777},
	                            {lat: 51.397363379257023, lng: 8.265486042264881},
	                            {lat: 51.397364941093876, lng: 8.265500365140475},
	                        ],
                    	},
                    	forwarder3Path: {
                    		color: '#3498db',
	                        weight: 4,
	                        latlngs: [
	                            {lat: 51.39591285, lng: 8.262373445},
	                            {lat: 51.39591285, lng: 8.262373445},
	                        ],
                    	},
                    },
				});
				// END OF FIXME DEBUG

				console.log(_self.dataService);

				var _setMachinePath = function(){
					for (var i = 0; i < _self.dataService.currentTimeIncrement; i++) {
						var lat = parseFloat(_self.dataService.dataSet.timedependent['<TIME:machine[3].lat>'][i]);
						var lng = parseFloat(_self.dataService.dataSet.timedependent['<TIME:machine[3].long>'][i]);
						_self.paths.forwarder3Path.latlngs.push({lat: lat, lng: lng});
					};
					
				}
				_setMachinePath();

				// _self.markers.forwarder1.latlngs = {
				// 	lat: parseFloat(_self.dataService.data.machine[0].lat), 
				// 	lng: parseFloat(_self.dataService.data.machine[0].long)
				// };
				// console.log("change");
				// console.log(_self.markers.forwarder1);
				_self.markers.forwarder3.lat = parseFloat(_self.dataService.data.machine[3].lat); //51.395877;
				_self.markers.forwarder3.lng = parseFloat(_self.dataService.data.machine[3].long);// 8.266884;

				// console.log("change");
				// console.log(_self.markers.forwarder1);
			}]);
			
}());
