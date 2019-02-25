angular.module('MyApp')
.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('summoner',
    {
        name: 'summoner',
        url: '/summoner',
        component: 'summoner'
    });
});