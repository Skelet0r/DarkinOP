'use strict';

angular.module('Orion')
.component
(
    'menu',
    {
        templateUrl:  'components/menu.html',
		
        controller: function($scope)
        {
			// Open menu bar
            $scope.originatorEv;
            $scope.openMenu = function($mdMenu, ev)
            {
                $scope.originatorEv = ev;
                $mdMenu.open(ev);
            };
		}
	}
);