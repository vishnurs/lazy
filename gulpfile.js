(function() {
    'use strict';

    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    gulp.task('default', function() {
        gulp.src('src/*.js')
            .pipe(uglify())
            .pipe(rename(function (path){
                if(path.extname === '.js') {
                    path.basename += '.min';
                }
            }))
            .pipe(gulp.dest('dist'));
    });
})();
