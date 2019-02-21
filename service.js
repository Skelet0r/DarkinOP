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
});