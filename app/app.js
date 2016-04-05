'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.summaryView',
        'myApp.participantsView',
        'myApp.matchesView',
        'myApp.resultsView',
        'myApp.version'
    ])

    .constant('ENDPOINT_URI', 'http://localhost:3000/api')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/summaryView'})
    }]);
