'use strict';

angular.module('MyApp').
component
(
    'summoner',
    {
        templateUrl: "summoner.html",
        /*bindings:
        {
            name1: '@',
            name2: '@',
            array: '=',
            etiqueta: '@',	
            func: '&',
            count: '='
        },*/
        controller: function(summonerService, $http, $scope)
        {
            console.log('Hola xd');
			
			$scope.getSummoner = function()
			{
				summonerService.getSummonerData()
                .then
				(
					function (response)
                    {
						console.log(response.data);
						$scope.responsexd = response;
					}
				)
				.catch
                (
					function(response)
					{
						console.log(response.status);
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
			
			$scope.getSummoner2 = function()
			{
				return $http.get
				(
					'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r', 
					{
						'headers':
						{
							'X-Riot-Token': 'RGAPI-af20bc8a-2b72-457a-bfc5-751995130c65',
							'Origin': "https://developer.riotgames.com",
							//'Accept-Charset': "application/x-www-form-urlencoded; charset=UTF-8",
							'Access-Control-Allow-Origin': '*',
							//'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
							'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
						}
						/*,
						'params':
						{
							api_key: 'RGAPI-af20bc8a-2b72-457a-bfc5-751995130c65'
						}*/
					}
				);
			}
			
			$scope.getSummoner2();
        }
    }
);