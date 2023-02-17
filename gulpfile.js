  import gulp from "gulp";
  import gulpInc from "gulp-file-include";
  import imgmin from "gulp-imagemin";
  import bs from "browser-sync";
  bs.create();
  
  const inc = gulp.task('inc', () => { 
  return gulp.src('dev/**/*.html')
  .pipe(gulpInc({
    prefix : '@@',
    basepath : '@file'
  }))
  .pipe(gulp.dest('dist/'))
  .pipe(bs.stream());
});

const imgMin = gulp.task('imgMin', () => {
  return gulp.src('dev/img/**/*.*')
  .pipe(imgmin())
  .pipe(gulp.dest('dist/img/'))
  .pipe(bs.stream());
});

const css = gulp.task('css', () => {
  return gulp.src('dev/css/**/*.css')
  .pipe(gulp.dest('dist/css'))
  .pipe(bs.stream());
});

const js = gulp.task('js', () => {
  return gulp.src('dev/js/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(bs.stream());
});

const watch = gulp.task('watch', () => {
  bs.init({
    server :{
      baseDir : 'dist/'
    }
  });
  gulp.watch('dev/**/*.html', inc);
  gulp.watch('dev/img/**/*.*', imgMin);
  gulp.watch('dev/js/*.js', js);
  gulp.watch('dev/css/**/*.css', css);
});
//
// export default () => {
//   bs.init({
//     server :{
//       baseDir : 'dist/'
//     }
//   });
//   gulp.watch('dev/**/*.html', inc);
//   gulp.watch('dev/img/**/*.*', imgMin);
//   gulp.watch('dev/js/*.js', js);
//   gulp.watch('dev/css/**/*.css', css);
// }