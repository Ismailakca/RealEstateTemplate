const gulp = require('gulp')
const sass = require('gulp-sass')
const browser = require('browser-sync').create()
const pug = require('gulp-pug')
const prefix = require('gulp-autoprefixer')
const reload = browser.reload


gulp.task('serve',() => {
    browser.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./views/**/*.pug',gulp.series(['html']))
    gulp.watch('./scss/**/*.scss',gulp.series(['css']))
    gulp.watch('./js/*.js',reload)
    gulp.watch('./*.html').on('change',browser.reload)
})
gulp.task('css',() => {
    return gulp.src('./scss/main.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(browser.stream())
})
gulp.task('html',() => {
    return gulp.src('./views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
})

gulp.task('default',gulp.series(['serve']))