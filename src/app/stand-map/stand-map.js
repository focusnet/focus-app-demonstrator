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
	angular.module('focusApp.standMap', [ 'focusApp.dataService' ])

	.controller('StandMapController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
