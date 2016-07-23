(function() {
    'use strict';
    angular
        .module('taco', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/home.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
                });
        });
})();