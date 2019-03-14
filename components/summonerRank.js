'use strict';

angular.module('Orion')
.component
(
    'summonerrank',
    {
        templateUrl:  'components/summonerRank.html',
		
		bindings:
		{
			summoner: '@'	
		},
		
        controller: function($scope, summonerService)
        {
			$scope.currentNavItem = 'Solo Queue';
            $scope.currentQueue = 0;

            $scope.goto = function(page)
            {
                $scope.currentQueue = page;
                $scope.status = "Go to " + page;
            };
            
			this.$onInit = function() 
			{
				$scope.getRankeds(this.summoner);
			}
			
			$scope.getRankeds = function(summonerID)
			{
				summonerService.getSummonerElo(summonerID)
				.then
                (
                    function (response)
                    {
						$scope.elos = response.data;
                    }
                )
                .catch
                (
                    function(response) 
                    {
                        console.log(response.data);
                    }
                )
                .finally
                (
                    function()
                    {
                        // Task finished in submit summoner.
                    }
                );
			};			
		}
	}
);