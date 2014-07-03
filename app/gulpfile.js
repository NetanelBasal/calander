var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var angularInjector = require('gulp-angular-injector');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
livereload = require('gulp-livereload'),
watch = require('gulp-watch');



var sassDir = 'styles/sass';
jsDir = 'scripts';




gulp.task('image', function() {
    gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('minimg'));
});



gulp.task('minify', function() {
    gulp.src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('minhtml'))
});


gulp.task('sass', function() {
    return gulp.src(sassDir + '/*.scss')
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('css/'))
        .pipe(livereload());
});

//dont forget to put the ng before the function to add angular injector
gulp.task('compress', function() {
    gulp.src('angular/*.js')
        .pipe(angularInjector())
        .pipe(uglify())
        .pipe(gulp.dest('minijs'))
        .pipe(livereload());
});
gulp.task('live', function() {
    gulp.src(['*.html', 'views/*.html'])
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch(sassDir + '/*.scss', ['sass']),
    gulp.watch(jsDir + '/*.js', ['compress']),
    gulp.watch(imgDir + '/*', ['image']),
    gulp.watch('*.html', ['live']),
    gulp.watch('views/*', ['live'])
})

gulp.task('default', ['watch']);