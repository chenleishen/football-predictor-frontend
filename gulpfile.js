var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('./index.js').
    pipe(browserify()).
    pipe(gulp.dest('bin2/'));
});

gulp.task('watch', function() {
  gulp.watch(['*.js','./templates/*.html'], ['browserify']);
});
