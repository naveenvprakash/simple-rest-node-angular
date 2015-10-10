(function () {
    'use strict';

    angular
        .module('beesoft-core.radication')
        .controller('RadicationCtrl', RadicationCtrl);

    RadicationCtrl.$inject = ['Restangular', "$state", "$mdDialog", "$mdToast"];

    function RadicationCtrl (Restangular, $state, $mdDialog, $mdToast) {

        var radicationCtrl                = this;
        var radicationObj                 = Restangular.all('/app/radications');
        radicationCtrl.title              = 'Bandeja de Entrada';
        radicationCtrl.documents          = null;

        // methods
        radicationCtrl.getDocuments       = getDocuments;
        radicationCtrl.goToDetailDocument = goToDetailDocument;
        radicationCtrl.createDocument     = createDocument;
        radicationCtrl.updateDocument     = updateDocument;
        radicationCtrl.deleteDocument     = deleteDocument;

        activate();

        //////////////////////////////////////////////////////


        function activate() {
            return getDocuments();
        }

        /**
         * Makes a call to API to get documents
         * @returns {*}
         */
        function getDocuments() {
            return radicationObj.getList()
                .then(function(data) {
                    radicationCtrl.documents = data;
                })
                .catch();
        }

        /**
         * Makes a call to API to create a new document
         * @returns {*}
         */
        function createDocument() {
            var document = {
                subject:radicationCtrl.subject,
                observations:radicationCtrl.observations,
                radication_number:radicationCtrl.radication_number
            };
            return radicationObj.post(document);
        }

        /**
         * Navigate to Detail View passing document model
         * @param id
         */
        function goToDetailDocument(id) {
              _.find(radicationCtrl.documents, function(document) {
                return  id === document.id ? $state.go('document', { detailDocument : document, documentId : document.id }) : null;
            });
        }

        /**
         * Makes a call to API to delete a document
         * @param document to delete
         */
        function deleteDocument(e, document) {
            // Dialog Setup
            var confirm = $mdDialog.confirm()
                .title('Sr Usuario')
                .content('Desea Eliminar este documento ?, Podra recuperarlo luego.')
                .targetEvent(e)
                .ok('Si, por favor ELiminar.')
                .cancel('no gracias');

            // Confirm Dialog
            $mdDialog.show(confirm)
                .then(function() {
                    return document.remove();
                })
                .then(function() {
                    getDocuments();
                        $mdToast.show($mdToast.simple()
                            .content('Documento ELiminado!')
                            .position('top right')
                            .hideDelay(3000)
                        );
                     }).catch();
        }

        function updateDocument(){}
    }
})();