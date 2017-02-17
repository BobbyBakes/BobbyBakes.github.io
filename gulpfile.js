var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
  return gulp.src('assets/js/form.js')
    .pipe(webpack())
    .pipe(gulp.dest('static/js'));
});
