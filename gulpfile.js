var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('trry', function() {
  return gulp.src('styles/*.less')
    .pipe(watch('styles/*.less'))
    .pipe(less())
    .pipe(gulp.dest('styles/updated.css'));
});


gulp.task('default', function(){

});
