/**
 * Created by lejo on 29/05/2015.
 */
(function() {

    'use strict';

    angular
        .module('beesoft-core.radication', ['beesoft-core.core'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('documents', {
                    url: '/documents',
                    templateUrl: '../views/inbox-list.html',
                    controller: 'RadicationCtrl',
                    controllerAs: 'radicationCtrl'
                })

                .state('document', {
                    url: '/documents/:documentId',
                    templateUrl: '../views/doc-detail.html',
                    controller: 'RadicationDetailCtrl',
                    controllerAs: 'radicationDetailCtrl',
                    params: { detailDocument: null , documentId : null }
                })
                .state('radications', {
                    url: '/radications',
                    templateUrl:'../views/doc-radication.html',
                    controller :'RadicationCtrl',
                    controllerAs :'radicationCtrl'
                });

        })
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
})();