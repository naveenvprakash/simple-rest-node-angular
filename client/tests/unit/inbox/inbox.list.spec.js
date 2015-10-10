/**
 * Created by lejo on 29/05/2015.
 */

describe('Test InboxListController', function () {
    var $httpBackend, $rootScope, createController, authRequestHandler;
    var urlBase = 'api/inbox.json';
    var lannisterModel =  [
        {id: 1, name: "Jamie"},
        {id: 2, name: "Tyrion"},
        {id: 3, name: "Cersie"}
        ];

    beforeEach(angular.mock.module('beesoft-core.inbox'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        authRequestHandler = $httpBackend.when('GET', urlBase).respond(lannisterModel);

        $rootScope = $injector.get('$rootScope');

        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('InboxListController', {'$scope' : $rootScope});
        };
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the lannister list from the API', function () {
        $httpBackend.expectGET(urlBase).respond(lannisterModel);
        var controller = createController();
        $httpBackend.flush();

    });

});
