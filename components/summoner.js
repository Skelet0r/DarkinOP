'use strict';

angular.module('Orion')
.component
(
    'summoner',
    {
        templateUrl:  'components/summoner.html',
		
        controller: function($stateParams, $http, $scope, $mdDialog, $state, summonerService)
        {
			$scope.idSummoner = false;
			$scope.summonerName = $stateParams.summonerName;
			$scope.summonerRegion = $stateParams.summonerRegion;
			$scope.summonerRegionAPI = $stateParams.summonerRegionAPI;
			
			//console.log('Name: ' + $scope.summonerName + ', region: ' + $scope.summonerRegion + ', API' + $scope.summonerRegionAPI);
			
        	this.$onInit = function() 
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
                    summonerService.getSummonerData($scope.summonerName, $scope.summonerRegionAPI, $scope.summonerRegion)
                    .then
                    (
                        function (response)
                        {							
							if(response.data.status == 200)
							{
								$scope.dataSummoner = response.data;
							
								$scope.validSummoner = true;
                            	$scope.invalidSummoner = false;
							}
							
							else if(response.data.status == 404)
                            {
                                $scope.validSummoner = false;
                                $scope.invalidSummoner = true;
                            }
                            
							// Else if: API Key expired.
                            else if(response.data.status == 403)
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
							
							else if(response.data.status == 500)
                            {
								$mdDialog.show
                                (
                                    $mdDialog
                                    .alert()
                                    .title('Ops!')
                                    .textContent('Problems with Riot Services.')
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
                                    .textContent('An error has occurred, code: ' + response.data.status)
                                    .ok('Okay')
                                );
								$state.go('summonersearch');
                            }
                        }
                    )
                    .catch
                    (
                        function(response) 
                        {
							$mdDialog.show
                            (
                                $mdDialog
                                .alert()
                                .title('Ops!')
								.textContent('An error has occurred, code: ' + response.data.status)
								.ok('Okay')
                            );
							$state.go('summonersearch');
							// If: Summoner not found.
                            /*if(response.data['status'].status_code == '404')
                            {
                                $scope.validSummoner = false;
                                $scope.invalidSummoner = true;
								//$scope.idSummoner = false;
                                //console.log('Summoner not found.');
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
							
							else if(response.data['status'].status_code == '500')
                            {
								$mdDialog.show
                                (
                                    $mdDialog
                                    .alert()
                                    .title('Ops!')
                                    .textContent('Problems with Riot Services.')
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
                            }*/
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