'use strict';

angular.module('myApp.tournamentsView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tournamentsView', {
            templateUrl: 'tournamentsView/tournamentsView.html',
            controller: 'TournamentsCtrl'
        });
    }])

    .service('TournamentsModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/tournaments';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('TournamentsCtrl', function (TournamentsModel) {
        var main = this;

        function getTournaments() {
            TournamentsModel.all().then(function (result) {
                main.items = result.data;
            });
        }

        main.items = [];
        main.getTournaments = getTournaments;

        getTournaments();

    });