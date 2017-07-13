'user strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function () {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/ssass/*.scss', ['sass']);
});
