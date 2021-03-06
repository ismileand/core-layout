'use strict';

var angular = require('angular-x');

/* @ngInject */
function DrawerController($scope, iScrollService, coreLayoutService) {
    var _index = {};

    function _getRows(count) {
        if (! _index.hasOwnProperty(count)) {
            _index[count] = new Array(count);
        }
        return _index[count];
    }
    
    $scope.iScrollState = iScrollService.state;
    $scope.toggleIScroll = iScrollService.toggle;
    $scope.drawers = coreLayoutService.state;

    $scope.getRows = _getRows;
}

module.exports = angular.module('myApp.drawer', [])
    .controller('DrawerController', DrawerController);
