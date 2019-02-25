'use strict';

angular.module('MyApp')
.component
(
    'summoner',
    {
        templateUrl:  'components/summoner/summoner.html',
           
        controller: function($scope, $mdDialog, $http, summonerService, $window, $element)
        {
            
            // Open menu bar
            $scope.originatorEv;
            $scope.openMenu = function($mdMenu, ev)
            {
                $scope.originatorEv = ev;
                $mdMenu.open(ev);
            };
            
            // Redirect to LoL eSports
            $scope.redirectToLOL = function()
            {
                $window.open('http://lolesports.com', '_blank');
            };
            
            // Region select
            $scope.regions = 
            [
                {
                    id: 'br1',
                    label: 'BR',
                    name: 'Brazil'
                },
                {
                    id: 'eun1',
                    label: 'EUNE',
                    name: 'Europe Nordic & East'
                },
                {
                    id: 'euw1',
                    label: 'EUW',
                    name: 'Europe West'                
                },
                {
                    id: 'la1',
                    label: 'LAN',
                    name: 'Latin America North'
                },
                {
                    id: 'la2',
                    label: 'LAS',
                    name: 'Latin America South'
                },
                {
                    id: 'na1',
                    label: 'NA',
                    name: 'North America'
                },
                {
                    id: 'oc1',
                    label: 'OCE',
                    name: 'Oceania'
                },
                {
                    id: 'ru',
                    label: 'RU',
                    name: 'Russia'
                },
                {
                    id: 'tr1',
                    label: 'TR',
                    name: 'Turkey'
                },
                {
                    id: 'jp1',
                    label: 'JP',
                    name: 'Japan'
                },
                {
                    id: 'kr',
                    label: 'KR',
                    name: 'Republic of Korea'
                }
            ];
            
            
            // Getting data about a summoner.
            // SUMMONER WITH TWO QUEUE'S: autofilltop            
            $scope.summoner = 'Skelet0r';
            $scope.dataSummoner = {};
            $scope.searchSummoner = function ()
            {
                var index = $scope.regions.findIndex(x=>x.label === $scope.selectedRegion.label);
                
                if($scope.summoner != null)
                {
                    summonerService.getSummonerData($scope.summoner, $scope.selectedRegion.id)
                    .then
                    (
                        function (response)
                        {
                            $scope.validSummoner = true;
                            $scope.invalidSummoner = false;
                            
                            console.log(response.data);
                            
                            $scope.iconSummoner = 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon' + response.data.profileIconId + '.jpg';
                            
                            
                            $scope.dataSummoner = 
                            {
                                accountID: response.data['accountId'],
                                summonerID: response.data['id'],
                                summonerName: response.data['name'],
                                icon: $scope.iconSummoner,
                                summonerLevel: response.data['summonerLevel'],
                                summonerRegion: $scope.selectedRegion,
                                summonerRegionAPI: $scope.selectedRegion.id
                            };
                        }
                    )
                    .catch
                    (
                        function(response) 
                        {
                            if(response.data['status'].status_code == '404')
                            {
                                $scope.validSummoner = false;
                                $scope.invalidSummoner = true;
                                console.log('Summoner not found.');
                            }
                            
                            else if(response.data['status'].status_code == '403')
                            {
                                $mdDialog.show
                                (
                                    $mdDialog
                                    .alert()
                                    .title('Ops!')
                                    .textContent('The API key has expired!')
                                    .ok('Okay')
                                );
                            }
                            
                            else
                            {
                                $mdDialog.show
                                (
                                    $mdDialog
                                    .alert()
                                    .title('Ops!')
                                    .textContent('An error has occurred, code: ' + response.data['status'].status_code)
                                    .ok('Okay')
                                );
                            }
                        }
                    )
                    .finally
                    (
                        function()
                        {
                            // Task finished in submit summoner.
                        }
                    );
                }
            }
        }
    }
);