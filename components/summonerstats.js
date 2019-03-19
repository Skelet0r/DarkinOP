'use strict';

angular.module('Orion')
.component
(
    'summonerstats',
    {
        templateUrl:  'components/summonerstats.html',
		
		bindings:
		{
			summoner: '@'	
		},
		
        controller: function($scope, summonerService)
        {
			$scope.currentNavItem = 'Matches';
            $scope.currentQueue = 0;
			
			console.log(this.summoner);

            $scope.goto = function(page)
            {
                $scope.currentQueue = page;
                $scope.status = "Go to " + page;
            };
		}
	}
);