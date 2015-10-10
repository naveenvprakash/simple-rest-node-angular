/**
 * Created by lejoss on 10/09/15.
 */
// Radications Endpoints (radications-routes)

var express         = require('express');
var radicationModel = require('../models/radication');
var router          = express.Router();

router.get('/app/radications', function(req, res) {
    radicationModel.fetchDocuments(function(result) {
        res.json(result.rows);
    });
});

router.get('/app/radications/:id', function(req, res) {
    var documentId = req.params.id;
    radicationModel.fetchDocument(documentId, function(result) {
        res.json(result.rows[0]);
    });
});

router.post('/app/radications', function(req, res) {
    var document = req.body;
    radicationModel.createDocument(document, function(result) {
        req.body.id = result.rows[0].id;
        res.status(201);
        res.send(req.body);
    });
});

router.delete('/app/radications/:id', function(req, res) {
    var documentId = req.params.id;
    radicationModel.deleteDocument(documentId, function(result) {
       res.status(204);
       res.send('document deleted');
    })
});

module.exports = router;





