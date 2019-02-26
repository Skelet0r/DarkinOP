'use strict';

angular.module('Orion')
.service('webServicePerron', function ($http) 
{
    var urlComplete = 'http://localhost:8080/CrunchifyRESTJerseyExample/crunchify/';
    
    this.getDataFtoC = function (fahrenheit)
    {
        var url = urlComplete + 'ftocservice/' + fahrenheit;
        return $http.get
        (
            url
        );
    }
    
    this.getDataCtoF = function (celsius)
    {
        var url = urlComplete + 'ctofservice/' + celsius;
        return $http.get
        (
            url
        );
    }
});