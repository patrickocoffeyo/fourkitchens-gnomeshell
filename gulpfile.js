var gulp = require('gulp');

// Include plugins
var sass = sass = require('gulp-ruby-sass');

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('sass/gnome-shell.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gnome-shell'))
});

gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass']);
});
