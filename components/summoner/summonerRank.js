'use strict';

angular.module('MyApp')
.component
(
    'summonerRank',
    {
        templateUrl:  'components/summoner/summonerRank.html',
           
        controller: function($scope, $rootScope, summonerService)
        {
            
            $scope.currentNavItem = 'soloQ';
            $scope.currentQueue = 0;

            $scope.goto = function(page)
            {
                $scope.currentQueue = page;
                $scope.status = "Go to " + page;
            };
            
            
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
            /*$scope.getQueue = function()
            {
                summonerService.getSummonerElo($scope.data.summonerID)
                .then
                (
                    function (response)
                    {
                        //console.log(response.data);
                        $scope.size = response.data.length;
                        if($scope.size > 0)
                        {
                            $scope.information = [];
                            $scope.i = 0;
                            for($scope.i = 0; $scope.i < $scope.size; $scope.i++)
                            {
                                $scope.information.push
                                (
                                    {
                                        queueType: (returnQueue(response.data[$scope.i]['queueType'])),
                                        wins: response.data[$scope.i]['wins'],
                                        losses: response.data[$scope.i]['losses'],
                                        rank: (capitalizeFirstLetter(response.data[$scope.i]['tier'].toLowerCase(), response.data[$scope.i]['rank'])),
                                        leagueName: response.data[$scope.i]['leagueName'],
                                        urlElo: ($scope.rankElo + response.data[$scope.i]['tier'].toLowerCase() + "_" + returnRomanInt(response.data[$scope.i]['rank']) + ".png")
                                    }
                                );
                            }
                            
                            $scope.wins = 0;
                            $scope.losses = 0;
                            for($scope.i = 0; $scope.i < $scope.size; $scope.i++)
                            {
                                $scope.wins = $scope.wins + response.data[$scope.i]['wins'];
                                $scope.losses = $scope.losses + response.data[$scope.i]['losses'];
                            }
                            
                            $scope.winratio = (100/($scope.wins + $scope.losses)) * $scope.wins;
                            
                            $scope.winratio = twoDecimals($scope.winratio);
                            $scope.checked = true;
                            //graph($scope.wins, $scope.losses);
                        }
                        
                        if($scope.size == 0)
                        {
                            //console.log('No ha rankeado :u');
                            $scope.checked = false;
                            $scope.wins = 0;
                            $scope.losses = 0;
                            //graph($scope.wins, $scope.losses);
                        }
                    }
                )
                .catch
                (
                    function (response)
                    {
                        alert('Ha ocurrido un error, código: ' + response.data['status'].status_code);
                    }
                )
                .finally
                (
                    function (response)
                    {
                        // Task finished in submit elo.
                    }
                );
            }
            
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
                    return 'Flex';
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
            }*/
        }
    }
);