/**
 * Created by lejoss on 18/09/15.
 */
(function () {
    'use strict';

    angular
        .module('beesoft-core.radication')
        .controller('RadicationDetailCtrl', RadicationDetailCtrl);

    RadicationDetailCtrl.$inject = ['Restangular', '$stateParams'];

    function RadicationDetailCtrl(Restangular, $stateParams) {

        var radicationDetailCtrl             = this;
        radicationDetailCtrl.detailDocument  = $stateParams.detailDocument;
        radicationDetailCtrl.documentId      = $stateParams.documentId;

        // methods
        radicationDetailCtrl.setDocumentById = setDocumentById;

        ////////////////////////////////////////////////////

        activate();

        function activate() {
            if(radicationDetailCtrl.detailDocument === null) {
                setDocumentById(radicationDetailCtrl.documentId);
            }
        }

        /**
         * Makes a call to API to Set the view model object
         * @param id of the document
         * @returns {*}
         */
        function setDocumentById(id) {
            return Restangular.one('/app/radications', id).get()
               .then(function(document) {
                    radicationDetailCtrl.detailDocument = document;
           });
        }
    }
})();
