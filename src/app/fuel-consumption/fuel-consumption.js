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
 
    angular.module('focusApp.fuelConsumption', ['focusApp.dataService', 'ngCanvasGauge'])

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
            	mode: "time",
            	timezone: "browser"
        	}
        };

        _self.undercolor = 'black';

        _self.overcolor = 'green';

        _self.val = 10;

        _self.min = 0;

        _self.max = 99;

        // _self.placeholder = "te";

        _self.mask = _self.val +" C°";


        // END OF FIXME DEBUG

        var _set_machine_path = function() {

            angular.copy([], _self.myData[0].data);

            var starttime = DataService.startDateTime.getTime();
            var currenttime = DataService.startDateTime.getTime() + DataService.currentTimeIncrement * 2 * 1000;
          
            var diff = currenttime - starttime;

            var x =0;
            for (var i = diff ; i <= 1800000; i=i+2000) {
            	_self.myData[0].data.push([
                        DataService.startDateTime.getTime() + DataService.dataSet.timedependent['<TIME:time_increment>'][i/2000] * 2 * 1000,
                        null,
                    ])
            };

            // for (var i = 0; i < DataService.currentTimeIncrement; i++) { //DataService.currentTimeIncrement

            //     // console.info("data");
            //     // console.info(DataService.dataSet.timedependent['<TIME:machine[3].technical_data.vehicle_payload>'][i]);

            //     _self.myData[0].data.push([
            //             DataService.startDateTime.getTime() + DataService.dataSet.timedependent['<TIME:time_increment>'][i] * 2 * 1000,
            //             DataService.dataSet.timedependent['<TIME:machine[3].technical_data.vehicle_payload>'][i],
            //         ]
            //     );
            // };

        };
        _set_machine_path();

    }]);


}());
