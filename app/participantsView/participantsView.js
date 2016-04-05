'use strict';

angular.module('myApp.participantsView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/participantsView', {
            templateUrl: 'participantsView/participantsView.html',
            controller: 'ParticipantsCtrl'
        });
    }])

    .service('ParticipantsModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/organizers/OTSAP/tournaments/ot2016/participants';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('ParticipantsCtrl', function (ParticipantsModel) {
        var main = this;

        function getParticipants() {
            ParticipantsModel.all().then(function (result) {
                main.items = result.data;
            });
        }

        main.items = [];
        main.getParticipants = getParticipants;

        getParticipants();
    });