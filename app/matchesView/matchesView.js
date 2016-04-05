'use strict';

angular.module('myApp.matchesView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/matchesView', {
            templateUrl: 'matchesView/matchesView.html',
            controller: 'MatchesCtrl'
        });
    }])

    .service('MatchesModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/organizers/OTSAP/tournaments/ot2016/matches';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('MatchesCtrl', function (MatchesModel) {
        var main = this;

        function getMatches() {
            MatchesModel.all().then(function (result) {
                main.items = result.data;
            });
        }

        main.items = [];
        main.getMatches = getMatches;

        getMatches();
    });