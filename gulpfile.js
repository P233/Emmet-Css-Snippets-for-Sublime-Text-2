
var gulp   = require('gulp');
var gutil  = require('gulp-util');
var sass   = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


// # Sass
gulp.task('sass', function(){
  gulp.src('css/style.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(prefix("last 2 versions"))
    .pipe(gulp.dest('css/'));
});

// # Watch
gulp.task('watch', function(){
  gulp.watch('css/style.scss', ['sass']);
});


gulp.task('default', ['watch']);
