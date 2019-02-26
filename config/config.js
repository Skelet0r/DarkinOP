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
        component: 'summoner'
    });
	/*.state('summoner-rank',
    {
        name: 'summoner-rank',
        url: '/summoner-rank',
        component: 'summoner-rank'
    });*/
});