'use strict';

angular.module('Orion')
.component
(
    'summoner',
    {
        templateUrl:  'components/summoner.html',
		
        controller: function($stateParams, $http, $scope, $mdDialog, $state, summonerService)
        {
			$scope.summonerName = $stateParams.summonerName;
			$scope.summonerRegion = $stateParams.summonerRegion;
			$scope.summonerRegionAPI = $stateParams.summonerRegionAPI;
			
			//console.log('Name: ' + $scope.summonerName + ', region: ' + $scope.summonerRegion + ', API' + $scope.summonerRegionAPI);
			
			this.summonerID = 'A ver si llega xd';
			
			var $ctrl = this;
        	$ctrl.$onInit = function() 
			{
				if($scope.summonerName == '')
				{
					$state.go('home');
				}
				else
				{
					$scope.searchSummoner();
				}
			}
			
			$scope.dataSummoner = {};
            $scope.searchSummoner = function ()
            {
                if($scope.summonerName != null)
                {
                    summonerService.getSummonerData($scope.summonerName, $scope.summonerRegionAPI)
                    .then
                    (
                        function (response)
                        {
                            $scope.validSummoner = true;
                            $scope.invalidSummoner = false;
                            
                            //console.log(response.data);
                            
                            $scope.iconSummoner = 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon' + response.data['profileIconId'] + '.jpg';
                            
							//console.log(summonerID);
							
							//$scope.summonerID = response.data['id'];
							//console.log($scope.summonerID);
							
                            $scope.dataSummoner = 
                            {
                                accountID: response.data['accountId'],
                                summonerID: response.data['id'],
                                summonerName: response.data['name'],
                                summonerLevel: response.data['summonerLevel'],
                                summonerRegion: $scope.summonerRegion
                            };
                        }
                    )
                    .catch
                    (
                        function(response) 
                        {
							// If: Summoner not found.
                            if(response.data['status'].status_code == '404')
                            {
                                $scope.validSummoner = false;
                                $scope.invalidSummoner = true;
                                console.log('Summoner not found.');
                            }
                            
							// Else if: API Key expired.
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
								$state.go('home');
                            }
                            
							// Other error.
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
								$state.go('summonersearch');
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