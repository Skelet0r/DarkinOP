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
				summonerService.getSummonerData2();
			}
			
			$scope.getSummoner2();
        }
    }
);