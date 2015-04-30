var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  browserify('./public/js/src/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js/build/'));
});

gulp.task('watch', function() {
  gulp.watch('public/js/src/**/*.jsx', ['js'])
})

gulp.task('default', ['js', 'watch']);
