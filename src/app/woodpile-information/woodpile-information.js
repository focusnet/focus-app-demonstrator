/**
 * Woodpile information
 * 
 * LIGNA scenario: step 10
 * 
 * Display description:
 * 		- A wood pile image with technical data, with some mention of the 
 * 			PolterLuchs product
 * 
 * Input variables:
 * 		woodpile[wid].lat
 *		woodpile[wid].long
 *		woodpile[wid].image
 *		woodpile[wid].id_polter
 *		woodpile[wid].id_harvester
 *		woodpile[wid].felling_number
 *		woodpile[wid].timber_pile_number
 *		woodpile[wid].timber_pile.quantity
 *		woodpile[wid].harvester_quantity
 *		woodpile[wid].tree_species[0]
 *		woodpile[wid].length
 *		woodpile[wid].estimated_volume
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.woodpileInformation', [ 'focusApp.dataService' ])

	.controller('WoodpileInformationController',
			[ 'DataService', function(DataService) {

				var _self = this;

				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data;

			} ]);

}());
