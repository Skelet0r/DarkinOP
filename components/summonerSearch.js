'use strict';

angular.module('Orion')
.component
(
    'summonersearch',
    {
        templateUrl:  'components/summonerSearch.html',
		
        controller: function($scope, $state)
        {
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
			
			$scope.summoner = 'Skelet0r';
			
			$scope.check = function()
			{				
				$state.go('summoner', { summonerName: $scope.summoner, summonerRegion: $scope.selectedRegion.name, summonerRegionAPI: $scope.selectedRegion.id });
			}
		}
	}
);