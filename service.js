'use strict';

angular.module('MyApp')
.service('summonerService', function ($http) 
{
    var web = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r?api_key=RGAPI-af20bc8a-2b72-457a-bfc5-751995130c65';

    this.getSummonerData = function ()
    {
        return $http.get
        (
			web
		);
    }
	
	this.getSummonerData2 = function ()
    {
		/*return $http.get
		(
			//'http://rest-service.guides.spring.io/greeting',
			'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r',
			{
				headers:
				{
					'X-Riot-Token': 'RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1',
					//'Authorization': 'X-Riot-Token RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1',
					'Access-Control-Allow-Origin': '*'
					// etc.
				}
			}
		);*/
		
		var req = null;
		var code = null;
		var response = null;
		var data = null;
		
		/*$.ajax
		(
			{
				type: 'GET',
				crossDomain: true,
				dataType: 'json',
				url: 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r?api_key=RGAPI-2d240b1d-76f5-4e28-82cc-18f64cba979d',
				//url: 'https://restcountries.eu/rest/v2/all?fields=name',
				success: function(jsondata)
				{
					console.log(jsondata);
				}
			}
		);*/
		
		return $http
		(
			{
				method: 'GET',
				url: 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r',
				headers:
				{
					'Access-Control-Allow-Origin': '*'
					//"X-Riot-Token": "RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1"
				},
				params:
				{
					'api_key': 'RGAPI-2d240b1d-76f5-4e28-82cc-18f64cba979d'
				}
			}
		);

		/*$.get('https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r',{api_key:"RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1"}).then(function(response){
			console.log("jquery response");console.log(response);
		});*/
		
		/*$http
		(
			{
				method: 'GET', 
				//url: 'http://rest-service.guides.spring.io/greeting',
				//url: 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r',
				url: 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r?api_key=RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1'
				//Authorization: 'RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1',
				headers:
				{
					'Access-Control-Allow-Origin': '*'
					//"X-Riot-Token": "RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1"
				},
				params:
				{
					//'api_key': 'RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1'
				},
				data:
				{
					
				}
				//Access-Control-Allow-Origin: '*'
			}
		)
		/*
		req = {
			url: 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skelet0r',
			params:{
				api_key: 'RGAPI-c44697f9-243e-4784-8aa4-72c4d414d0a1'
			},
			data:{
				sumonerName: 'Skelet0r'
			}
		};
		
		$http(req).then
		(	
			function(response)
			{
				status = response.status;
				data = response.data;
				console.log('Venga te carreo prro :v');
				console.log(data);
				document.write(response.data['content']);
				document.write(response.data['name']);
			}, 
			function(response)
			{
				data = response.data || 'Request failed';
				status = response.status;
				
				console.log('Esto no está funkando :c');
				console.log(status);
			}
		);*/
	}
});