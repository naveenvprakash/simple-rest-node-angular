/**
 * Created by lejo on 29/05/2015.
 */
(function(){
    'use strict';

    angular
        .module('beesoft-core', [
            // application modules
            'beesoft-core.core',
            'beesoft-core.menu',
            'beesoft-core.radication'

        ])
        .config(function($stateProvider, $urlRouterProvider) {



            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("/", {});

        })
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
})();