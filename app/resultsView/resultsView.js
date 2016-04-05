'use strict';

angular.module('myApp.resultsView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/resultsView', {
            templateUrl: 'resultsView/resultsView.html',
            controller: 'ResultsCtrl'
        });
    }])

    .service('ResultsModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/organizers/OTSAP/tournaments/ot2016';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('ResultsCtrl', function (ResultsModel) {
        var main = this;

        function getResults() {
            ResultsModel.all().then(function (result) {
                main.items = result.data[0].standings;
            });
        }

        main.items = [];
        main.getResults = getResults;

        getResults();
    });