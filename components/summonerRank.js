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
            };
            
			this.$onInit = function() 
			{
				$scope.getRankeds(this.summoner);
			}
			
            $scope.rank = '';
            $scope.rankSoloQue = '';
            $scope.rankQueue = '';
            $scope.rankElo = "http://opgg-static.akamaized.net/images/medals/";
            
            // Region select
            $scope.elos = 
            [
                {
                    queue: 'Solo Queue',
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
			
			$scope.getRankeds = function(summonerID)
			{
				summonerService.getSummonerElo(summonerID)
				.then
                (
                    function (response)
                    {
                        //console.log(response.data);
                        //console.log(response.data.length);
						
						$scope.eloSummoner = [];
						
						for(var i = 0; i < response.data.length; i ++)
						{
							$scope.eloSummoner.push
                            (
								{
									queueType: (returnQueue(response.data[i]['queueType'])),
                                    wins: response.data[i]['wins'],
                                    losses: response.data[i]['losses'],
                                    rank: (capitalizeFirstLetter(response.data[i]['tier'].toLowerCase(), response.data[i]['rank'])),
                                    leagueName: response.data[i]['leagueName'],
                                    urlElo: ($scope.rankElo + response.data[i]['tier'].toLowerCase() + "_" + returnRomanInt(response.data[i]['rank']) + ".png")
								}
							);
						}
						
						console.log($scope.eloSummoner);
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
			
			function capitalizeFirstLetter(s, r)
            {
                $scope.rankQueue = s[0].toUpperCase() + s.slice(1) + " " + r;
                return $scope.rankQueue;
            }
            
            function returnQueue (queue)
            {
                if(queue == 'RANKED_SOLO_5x5')
                {
                    return 'Solo Queue';
                }
                            
                if(queue == 'RANKED_FLEX_SR')
                {
                    return 'Flex 5 vs 5';
                }
            }
            
            function returnRomanInt (roman)
            {
                if(roman == 'I')
                {
                    return '1'
                }
                else if(roman == 'II')
                {
                    return '2'
                }
                else if(roman == 'III')
                {
                    return '3'
                }
                else
                {
                    return '4'
                }
            }
            
            function twoDecimals(value)
            {
                return isNaN(value) ? valor : parseFloat(value).toFixed(2);
            }
			
		}
	}
);