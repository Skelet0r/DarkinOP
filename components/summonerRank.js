'use strict';

angular.module('Orion')
.component
(
    'summonerrank',
    {
        templateUrl:  'components/summonerRank.html',
		
		bindings:
		{
			hero: '='	
		},
		
        controller: function($scope, summonerService)
        {
			$scope.currentNavItem = 'soloQ';
            $scope.currentQueue = 0;

            $scope.goto = function(page)
            {
                $scope.currentQueue = page;
                $scope.status = "Go to " + page;
            };
			
			//console.log($ctrl.hero);
			//console.log(this.bindings.hero);
			//console.log(this.hero);
			//console.log(hero);
			//console.log()
            
			var $ctrl = this;
        	$ctrl.$onInit = function() 
			{
				//console.log(this.hero);
				$scope.getRankeds();
			}
			
            $scope.rank = '';
            $scope.rankSoloQue = '';
            $scope.rankQueue = '';
            $scope.rankElo = "http://opgg-static.akamaized.net/images/medals/";
            
            // Region select
            $scope.elos = 
            [
                {
                    queue: 'Queue: SoloQ',
                    wins: '10',
                    losses: '3',
                    tier: 'Silver II',
                    league: 'Corkis',
                    icon: 'http://opgg-static.akamaized.net/images/medals/silver_2.png'
                },
                {
                    queue: 'Queue: Flex 5 vs 5',
                    wins: '3',
                    losses: '2',
                    tier: 'Platinum II',
                    league: 'Morgana',
                    icon: 'http://opgg-static.akamaized.net/images/medals/platinum_2.png'
                },
                {
                    queue: 'Queue: 3 vs 3',
                    wins: '4',
                    losses: '1',
                    tier: 'Gold II',
                    league: 'Azir',
                    icon: 'http://opgg-static.akamaized.net/images/medals/gold_2.png'
                }
            ];
			
			$scope.getRankeds = function()
			{
				summonerService.getSummonerElo()
				.then
                (
                    function (response)
                    {
                        console.log(response.data);
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