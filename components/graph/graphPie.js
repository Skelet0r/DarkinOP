'use strict';

am4core.useTheme(am4themes_animated);

angular.module('Orion')
.component
(
    'graphPie',
    {
        templateUrl:  'components/summoner/summoner.html',
           
        controller: function($scope)
        {
            var chart = am4core.create("chartdiv", am4charts.PieChart);
        }
    }
);