/* =========================================== */
/*    GULP                                     */
/* =========================================== */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');


/* =========================================== */
/*    PATHS                                    */
/* =========================================== */

var paths = {
    js          : 'assets/js/app.js',
    scss        : 'assets/css/app.scss',

    destJS      : 'assets/js/min',
    destCSS     : 'assets/css',

    watchJS     : 'assets/js/*.js',
    watchSCSS   : 'assets/css/*.scss',
    watchHTML   : '*.html',

    watchGreen        : 'assets/themes/green/*.scss',
    themeGreen        : 'assets/themes/green/style.scss',
    destThemeGreen    : 'assets/themes/green',

    watchOrange        : 'assets/themes/orange/*.scss',
    themeOrange        : 'assets/themes/orange/style.scss',
    destThemeOrange    : 'assets/themes/orange',

    watchGray        : 'assets/themes/gray/*.scss',
    themeGray        : 'assets/themes/gray/style.scss',
    destThemeGray    : 'assets/themes/gray',

    watchBlue        : 'assets/themes/blue/*.scss',
    themeBlue        : 'assets/themes/blue/style.scss',
    destThemeBlue    : 'assets/themes/blue',

    watchBrown        : 'assets/themes/brown/*.scss',
    themeBrown        : 'assets/themes/brown/style.scss',
    destThemeBrown    : 'assets/themes/brown',

    watchBeige        : 'assets/themes/beige/*.scss',
    themeBeige        : 'assets/themes/beige/style.scss',
    destThemeBeige    : 'assets/themes/beige',

    watchBlueII        : 'assets/themes/blue2/*.scss',
    themeBlueII        : 'assets/themes/blue2/style.scss',
    destThemeBlueII    : 'assets/themes/blue2',

    watchBrownII        : 'assets/themes/brown2/*.scss',
    themeBrownII        : 'assets/themes/brown2/style.scss',
    destThemeBrownII    : 'assets/themes/brown2'
};


/* =========================================== */
/*    TASKS                                    */
/* =========================================== */

gulp.task('scripts', function () {
    return gulp.src(paths.js)
        .pipe(uglify({
            mangle      : false,
            output      : {
                beautify    : true,
                comments    : true
            }
        }))
        .pipe(gulp.dest(paths.destJS));
});

gulp.task('styles', function () {
    return sass(paths.scss, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destCSS));
});

gulp.task('theme-green', function () {
    return sass(paths.themeGreen, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeGreen));
});

gulp.task('theme-orange', function () {
    return sass(paths.themeOrange, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeOrange));
});

gulp.task('theme-gray', function () {
    return sass(paths.themeGray, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeGray));
});

gulp.task('theme-blue', function () {
    return sass(paths.themeBlue, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeBlue));
});

gulp.task('theme-brown', function () {
    return sass(paths.themeBrown, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeBrown));
});

gulp.task('theme-beige', function () {
    return sass(paths.themeBeige, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeBeige));
});

gulp.task('theme-blue-2', function () {
    return sass(paths.themeBlueII, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeBlueII));
});

gulp.task('theme-brown-2', function () {
    return sass(paths.themeBrownII, { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destThemeBrownII));
});


/* =========================================== */
/*    WATCH                                    */
/* =========================================== */

gulp.task('default', function () {
    gulp.watch(paths.watchJS, ['scripts']);
    gulp.watch(paths.watchSCSS, ['styles']);
    gulp.watch(paths.watchGreen, ['theme-green']);
    gulp.watch(paths.watchOrange, ['theme-orange']);
    gulp.watch(paths.watchGray, ['theme-gray']);
    gulp.watch(paths.watchBlue, ['theme-blue']);
    gulp.watch(paths.watchBrown, ['theme-brown']);
    gulp.watch(paths.watchBeige, ['theme-beige']);
    gulp.watch(paths.watchBlueII, ['theme-blue-2']);
    gulp.watch(paths.watchBrownII, ['theme-brown-2']);
});