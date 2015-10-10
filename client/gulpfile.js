/**
 * Created by lejo on 29/05/2015.
 */

var gulp        = require('gulp'),
    opn         = require('opn'),
    karma       = require('karma').server,
    concat      = require('gulp-concat'),
    jshint      = require('gulp-jshint'),
    ngAnnotate  = require('gulp-ng-annotate'),
    sass        = require('gulp-sass'),
    server      = require('gulp-develop-server'),
    replace     = require('gulp-replace');


gulp.task('tests', function(done) {
    karma.start({
        configFile:__dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('build-lib', function() {
    gulp.src([
        'bower_components/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-messages/angular-messages.js',
        'bower_components/angular-material/angular-material.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/ui-router/release/angular-ui-router.js',
        'bower_components/lodash/lodash.js',
        'bower_components/restangular/dist/restangular.js'
    ])
        .pipe(concat('beesoft.lib.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('build-js', function() {
    gulp.src([
        'app/app.js',
        'app/components/**/*.module.js',
        'app/components/**/*.controller.js',
        'app/components/**/*.service.js',
        'app/components/**/*.directive.js',
        'app/core/*.module.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(ngAnnotate())
        .pipe(concat('beesoft.app.js'))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('sass', function () {
    gulp.src('./assets/stylesheets/sass/main.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./assets/stylesheets/css'))
});

gulp.task('watch', function() {
   gulp.watch(['./app/**/*.js'], ['build-js']);
   gulp.watch(['./assets/stylesheets/sass/**/*.sass'], ['sass']);


});

gulp.task('server:start', function() {
   server.listen({
       path:'../server/app/app.js'
   })
});

gulp.task('open-browser', function() {
   opn('http://localhost:3000/');
});

gulp.task('build', ['build-js', 'build-lib', 'sass']);

gulp.task('gordis', ['server:start', 'watch', 'open-browser']);


