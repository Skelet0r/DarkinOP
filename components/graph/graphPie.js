'use strict';

angular.module('Orion')
.component
(
    'graph',
    {
        templateUrl:  'components/graph/graphPie.html',
           
        controller: function($scope)
        {
            //var chart = am4core.create("chartdiv", am4charts.PieChart);
			
			Highcharts.chart('container', {
    title: {
        text: 'Games'
    },
    xAxis: {
        categories: ['Wins', 'Losses']
    },
    series: [{
        type: 'pie',
        name: 'Games',
        data: [{
            name: 'Losses',
            y: 13,
            color: Highcharts.getOptions().colors[8] // Jane's color
        }, {
            name: 'Wins',
            y: 23,
            color: Highcharts.getOptions().colors[0] // John's color
        }],
        center: [10, 10],
        size: 80,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});

        }
    }
);