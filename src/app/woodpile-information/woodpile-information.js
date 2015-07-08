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
 *		woodpile[wid].lng
 *		woodpile[wid].image
 *		woodpile[wid].id_polter
 *		woodpile[wid].id_harvester
 *		woodpile[wid].felling_number
 *		woodpile[wid].timber_pile_number
 *		woodpile[wid].timber_pile.quantity
 *		woodpile[wid].harvester_quantity
 *		woodpile[wid].tree_specie[0]
 *		woodpile[wid].length
 *		woodpile[wid].estimated_volume
 * 
 * @@source_header
 * 
 * --
 * 
 * This file is part of the focus-mobile-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */

'use strict';

(function() {
	angular.module('focusApp.woodpileInformation', [ 'focusApp.dataService', 'focusApp.navigationService' ])

	.controller('WoodpileInformationController',
			[ '$location', 'DataService', 'NavigationService', function($location, DataService, NavigationService) {
				
				var _self = this;

				/**
				 * Get the id of the currently accessed woodpile
				 */
				var parts = $location.path().split(/\//);
				_self.currentWoodpileId = parts[2] || 0;
				
				/**
				 * Reference to the current data sample being rendered
				 */
				_self.data = DataService.data.woodpile[_self.currentWoodpileId];
	
				/**
				 * Set the title of the page
				 */
				NavigationService.currentTitle = 'Woodpile #' + _self.data.timber_pile_number;

			} ]);

}());
