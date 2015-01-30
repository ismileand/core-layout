'use strict';

var angular = require('angular-x');

module.exports = angular
    .module('myApp.version', [
        require('./version.directive.js').name
    ])
    .value('version', '/* @echo pkg.version */')
    .value('buildTimestamp', '/* @echo now */');
