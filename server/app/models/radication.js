/**
 * Created by lejoss on 11/09/15.
 */

/* Radications Model -------------------*/

var db = require('../dataconfig');
var _  = require('lodash');

/**
 * Gets all documents from database
 * @param success callback
 */
exports.fetchDocuments = function(success) {
    db.useClient(function(client) {
        client.query('SELECT * FROM document', function(err, result) {
            if(err) { return console.error('error running query', err); }
            success(result);
            client.end();
        });
    });
};

/**
 * Get a document by Id from database
 * @param id of the document to fetch
 * @param success callback
 */
exports.fetchDocument = function(id, success) {
    var sentenceSQL = 'SELECT * FROM document WHERE id = ($1)';
    db.useClient(function(client) {
        client.query(sentenceSQL, [id], function(err, result) {
            if(err) { return console.error('error running query', err); }
            success(result);
            client.end();
        });
    });
};

/**
 * Create new document on db
 * @param document to insert into db
 * @param success callback
 */
exports.createDocument = function (document, success) {
  var values    = _.values(document);
  var sentenceSQL  = 'INSERT INTO document(subject, observations, radication_number) values($1, $2, $3) RETURNING id';
  db.useClient(function(client) {
      client.query(sentenceSQL, values, function(err, result){
          if(err) { return console.error('error running query', err); }
          success(result);
          client.end();
      });
  });
};

/**
 * Deletes a document from the db
 * @param id of the document to delete
 * @param success
 */
exports.deleteDocument = function(id, success) {
  var sentenceSQL = "DELETE FROM document WHERE id=($1)";
  db.useClient(function(client) {
      client.query(sentenceSQL, [id], function(err, result) {
          if(err) { return console.error('error running query', err); }
          success(result);
          client.end();
      });
  });
};
