'use strict';

angular.module('Orion')
.service('summonerService', function ($http, $mdDialog) 
{
    // Variables for API's.
    var url_region = '';
    
    
    // Variables for URL Summoner.
    var url_summoner = '';

    this.getSummonerData = function (summoner, region, regionName)
    {
		url_region = region;
		url_summoner = 'http://localhost:3000/api/v1/summonerName/' + region +'/'+ regionName + '/' + summoner;
            
		return $http.get(url_summoner);
    }    
    
    this.getSummonerElo = function(summonerID)
    {
        url_summoner = 'http://localhost:3000/api/v1/elo/' + url_region +'/'+ summonerID;
        
		return $http.get( url_summoner );
    }
});