var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }

  });

  watch('./app/index.html', function() {

    browserSync.reload();

  });
//watches for any change to css tastk
  watch('./app/assets/styles/**/*.css', function() {

    gulp.start('cssInject');

  });

  watch('./app/assets/scripts/**/*.js', function() {

    gulp.start('scriptsRefresh');

  });

});


//When css changes occur, injects css changes AFTER the dependency of the styles task pre-processes our css.
gulp.task('cssInject', ['styles'], function(){

  return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
