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

    angular.module('focusApp.fuelConsumption', ['focusApp.dataService', 'gridshore.c3js.chart', 'ngCanvasGauge'])

    .controller('FuelConsumptionController', ['$scope', 'DataService', function($scope, DataService) {

        var _self = this;

        /**
         * Reference to the current data sample being rendered
         */
        _self.data = DataService.data;

        _self.datapoints = [{
            "time": 10,
            "top-1": 10,
        }, {
            "time": 20,
            "top-1": 100,
        }, {
            "time": 30,
            "top-1": 15,
        }, {
            "time": 40,
            "top-1": 50,
        }];

        _self.datacolumns = [{
            "id": "top-1",
            "type": "spline",
            "color": "green"
        }, ];

        _self.datax = {
            "id": "time"
        };

        console.log('loaded fuel');
        // END OF FIXME DEBUG

    }]);


}());
