'use strict';

angular.module('myApp.summaryView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summaryView', {
            templateUrl: 'summaryView/summaryView.html',
            controller: 'SummaryCtrl'
        });
    }])

    .service('SummaryModel', function ($http, ENDPOINT_URI) {
        var service = this;
        var path = '/organizers/OTSAP/tournaments/ot2016';
        service.all = function () {
            return $http.get(ENDPOINT_URI + path);
        }
    })

    .controller('SummaryCtrl', function (SummaryModel) {
        var main = this;

        function getSummary() {
            SummaryModel.all().then(function (result) {
                main.items = result.data;
            });
        }

        main.items = [];
        main.getSummary = getSummary;

        getSummary();

    });