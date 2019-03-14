angular.module('Orion')
.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home',
    {
        name: 'home',
        url: '/home',
        component: 'home'
    })
	.state('menu',
    {
        name: 'menu',
        url: '/menu',
        component: 'menu'
    })
	.state('graph',
    {
        name: 'graph',
        url: '/graph',
        component: 'graph'
    })
	.state('summonersearch',
    {
        name: 'summonersearch',
        url: '/summonersearch',
        component: 'summonersearch'
    })
	.state('summoner',
    {
        name: 'summoner',
        url: '/summoner',
        component: 'summoner',
		params: { summonerName: '', summonerRegion: '', summonerRegionAPI: '' }
    })
	.state('summonerrank',
    {
        name: 'summonerrank',
        url: '/summonerrank',
        component: 'summonerrank',
		params: { summonerName: '', summonerRegion: '', summonerRegionAPI: '' }
    });
	/*.state('summoner-rank',
    {
        name: 'summoner-rank',
        url: '/summoner-rank',
        component: 'summoner-rank'
    });*/
});