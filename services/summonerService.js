'use strict';

angular.module('Orion')
.service('summonerService', function ($http, $mdDialog) 
{
    var baseUrlGetSummoner = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
    var endUrlGetSummoner = '?api_key=';
    var apiKey = 'RGAPI-4f89de56-5ebf-43a2-b9f7-da9ea6d54433';
    var _summoner = '';
    var _summonerID = '';
    var _finalUrl = '';
    
    var baseUrlGetElo = 'https://la1.api.riotgames.com/lol/league/v4/positions/by-summoner/';
    var _finalUrlElo = '';
    
    
    // Variables for API's.
    var region = '';
    var url_base1 = 'https://';
    var url_base2 = '.api.riotgames.com/lol/';
    var url_api1 = '?api_key=';
    var url_api2 = 'RGAPI-8733c951-c427-4f6a-9f1e-489d63cd655a';
    
    
    // Variables for URL Summoner.
    var url_summoner = '';
    var url_getDataSummoner = 'summoner/v4/summoners/by-name/';
    
    
    
    // Variables for ELO Summoner.
    // We are using some variables from first API request.
    var url_getEloSummoner = 'league/v4/positions/by-summoner/';
    // var = url_base + 

    this.getSummonerData = function (summoner, region)
    {
		url_summoner = url_base1 + region + url_base2 + url_getDataSummoner + summoner + url_api1 + url_api2;
            
		return $http.get(url_summoner);
    }    
    
    this.getSummonerElo = function(summonerID)
    {
        //console.log('probando');
        //console.log(summonerID);
        url_summoner = url_base1 + region + url_getDataSummoner + summonerID + endUrlGetSummoner + url_api1 + url_api2;
        //console.log(_finalUrlElo);
        return $http.get( url_summoner );
    }
});