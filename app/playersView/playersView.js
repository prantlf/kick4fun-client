'use strict';

angular.module('myApp.playersView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/playersView', {
            templateUrl: 'playersView/playersView.html',
            controller: 'PlayersCtrl'
        });
    }])

    .service('PlayersModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/players';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('PlayersCtrl', function (PlayersModel) {
        var main = this;

        function getPlayers() {
            PlayersModel.all().then(function (result) {
                main.items = result.data;
            });
        }

        main.items = [];
        main.getPlayers = getPlayers;

        getPlayers();
    });