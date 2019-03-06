'use strict';

angular.module('Orion')
.service('summonerService', function ($http, $mdDialog) 
{
    // Variables for API's.
    var url_region = '';
    var url_base1 = 'https://';
    var url_base2 = '.api.riotgames.com/lol/';
    var url_api1 = '?api_key=';
    var url_api2 = 'RGAPI-36c00ff9-3bb9-4514-9f88-e273685ac3f7';
    
    
    // Variables for URL Summoner.
    var url_summoner = '';
    var url_getDataSummoner = 'summoner/v4/summoners/by-name/';
    
    // Variables for ELO Summoner.
    // We are using some variables from first API request.
    var url_getEloSummoner = 'league/v4/positions/by-summoner/';

    this.getSummonerData = function (summoner, region)
    {
		url_region = region;
		
		url_summoner = url_base1 + region + url_base2 + url_getDataSummoner + summoner + url_api1 + url_api2;
            
		return $http.get(url_summoner);
    }    
    
    this.getSummonerElo = function(summonerID)
    {
        url_summoner = url_base1 + url_region + url_base2 + url_getEloSummoner + summonerID + url_api1 + url_api2;
        
		return $http.get( url_summoner );
    }
});