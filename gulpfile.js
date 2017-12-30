// My first gulp file

// Variables
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

// Task to lint, validate and call compile
gulp.task('build', function(){

});

// Task to compile and minify css, js and html for putting out to the website
gulp.task('deploy', function(){

});

// Task to compile less -> css

gulp.task('default', function(){
    gulp.start('lessToCss');
});

gulp.task('lessToCss', function() {
    gulp.src('src/*.less')
    // .pipe(watch('styles/*.less'))
    .pipe(less())
    .pipe(gulp.dest('src/main.css'));
});
