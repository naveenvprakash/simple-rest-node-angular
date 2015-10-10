/**
 * Created by lejoss on 11/09/15.
 */

var postgres   = require('pg');
var datasource = 'postgres://lejoss:123fenix@localhost/beesoft-core';

exports.useClient = function(cb) {
    postgres.connect(datasource, function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        cb(client);
    });
};