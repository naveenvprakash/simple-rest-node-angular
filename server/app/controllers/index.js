/**
 * Created by lejoss on 10/09/15.
 */

    module.exports = function(app){

        // Import Application Routes
        var radicationCtrl  = require('./radications');

        // setup application to use routes
        app.use(radicationCtrl);

        //Get base path
        app.get('/', function(req, res) {
            res.redirect('/app/');
        });

    };



