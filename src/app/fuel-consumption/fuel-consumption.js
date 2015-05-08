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

        _self.myData = [{
                label: "Fuel Consumption ",
                data: [], // add machine[mid].technical_data.engine_revolutions
            },
            // {
            // 	label : "Bar2",
            // 	data : [ [ 11, 13 ], [ 19, 11 ], [ 30, -7 ] ]
            // } 
        ];

        _self.myChartOptions = {
            series: {
                lines: { show: true},
                points: { show: false },
            },
            xaxis: {
            	show: true,
            	mode: "time"
        	}
        };

        console.log('loaded fuel');
        // END OF FIXME DEBUG

        var _set_machine_path = function() {

            // angular.copy({}, self.datapoints[0].data);


            console.info(DataService.startDateTime.getTime());
            console.info(DataService);
            for (var i = 0; i < DataService.currentTimeIncrement; i++) { //DataService.currentTimeIncrement

                // console.info("data");
                // console.info(DataService.dataSet.timedependent['<TIME:machine[3].technical_data.vehicle_payload>'][i]);

                _self.datapoints[0].data.push([
                        DataService.startDateTime.getTime() + DataService.dataSet.timedependent['<TIME:time_increment>'][i] * 2 * 1000,
                        DataService.dataSet.timedependent['<TIME:machine[3].technical_data.vehicle_payload>'][i]
                    ]


                    // "time": ,
                    // "top-1": ,
                );
            };

        };
        _set_machine_path();

    }]);




}());
