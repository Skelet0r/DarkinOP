'use strict';

angular.module('Orion')
.component
(
    'graph',
    {
        templateUrl:  'components/graph/graphPie.html',
		
		bindings:
		{
			wins: '@'/*,
			losses: '@'	*/
		},
		
        controller: function($scope)
        {
			console.log(this.wins);
			Highcharts.chart
			(
				'container',
				{
    				title:
					{
        				text: ''
    				},
					credits:
					{
      					enabled: false
  					},
    				xAxis: 
					{
        				categories: ['Wins', 'Losses']
    				},
    				series: 
					[
						{
        					type: 'pie',
        					name: 'Games',
        					data: 
							[
								{
            						name: 'Losses',
            						y: 13,
            						color: Highcharts.getOptions().colors[8] // Losses color
        						},
								{
            						name: 'Wins',
            						y: 23,
            						color: Highcharts.getOptions().colors[0] // Wins color
        						}
							],
        					center: [10, 10],
        					size: 60,
        					showInLegend: false,
        					dataLabels:
							{
            					enabled: false
        					}
    					}
					]
				}
			);
        }
    }
);