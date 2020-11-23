const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const { series } = require('gulp');

/**
 * --TOP LEVEL FUNCTIONS--
 *  1) gulp.task  - Define task
 *  2) gulp.src   - Points to files to use
 *  3) gulp.dest  - Points to folder to output.
 *  4) gulp.watch - Watch files and folders for changes
 */

//  gulp.task('default',  async function(){
//      return console.log('Gulp is runnig');
//  });

 gulp.task('copyHtml', async function(){
     gulp.src('./src/*.html')
     .pipe(gulp.dest('./dist'));
 });

 gulp.task('imagemin', () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
));

gulp.task('uglify', () => (
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
))

gulp.task('sass',()=> (
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
))

gulp.task('default', gulp.series(['copyHtml','imagemin','uglify','sass']));

gulp.task('watch', ()=>(
    gulp.watch('./src/js/*.js',gulp.series('uglify')),
    gulp.watch('./src/img', gulp.series('imagemin')),
    gulp.watch('./src/sass/*.scss', gulp.series ('sass'))
));

