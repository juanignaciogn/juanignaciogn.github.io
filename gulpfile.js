/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
cleanCSS = require('gulp-clean-css'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');
// Default Task

gulp.task('default', ['html', 'sass', 'js']);

// js Task
gulp.task('js', function () {
	gulp.src('js/*.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/min/'));
});


// html Task
gulp.task('html', function() {
	return gulp.src(['*.html','!index.html'])
	.pipe(concat('index.html'))
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./'));
});

// sass Tasks (sass + autoprefixer + minify)
gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('css/min'));
});

// css Task (deprecated)
gulp.task('css', function() {
	return gulp.src('css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('css/min'));
});