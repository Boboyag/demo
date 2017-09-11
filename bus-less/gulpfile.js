var gulp = require('gulp');
var less = require('gulp-less');
var autopre = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');

gulp.task('less', function() {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(autopre({
            browsers: ['last 4 versions', 'Android>=4.0'],
            cascade: true, //是否美化属性值 
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(clean())
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('watch', function() {
    return gulp.watch('./less/*.less', ['less'])
});

gulp.task('default', ['watch'], function() {
    console.log('success');
});
