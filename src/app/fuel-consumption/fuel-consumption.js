/**
 * Machine's fuel consumption
 * 
 * LIGNA scenario: step 14
 * 
 * Display description: - A chart of the fuel consumption for the current day -
 * a table of the average fuel consumption per hours for the past 8 hours - ??
 * 
 * Input variables: machine[3].technical_data.fuel_consumption
 * 
 * @@source_header
 * 
 */

'use strict';

(function() {

    angular.module('focusApp.fuelConsumption', ['focusApp.dataService', 'gridshore.c3js.chart'])

    .controller('FuelConsumptionController', ['$scope', 'DataService', function($scope, DataService) {

        var _self = this;

        /**
         * Reference to the current data sample being rendered
         */
        _self.data = DataService.data;

        _self.datapoints = [{data1: 34}];

        _self.datacolumns = [ {
          //  "id": "top-1",
        		id: 'data1',
            type: "gauge",
            color: "pink", 
            name: 'test name',
           
            	gauge: {
            		label: {
            			show:false,
            			format: function(a,b) {return 'salut'}
            		}
            	}
        } ];

        _self.datax = {
            "id": "time"
        };

        console.log('loaded fuel');
        
        
        _self.test123 = function() {
        	console.log(angular);
        	console.log('HELLO');
        }
        // END OF FIXME DEBUG

    }]);

}());
