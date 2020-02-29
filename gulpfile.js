var gulp = require("gulp"),
      sass = require("gulp-sass");


function style() {
    return (
        gulp.src("app/scss/**/*.scss")
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest("app/css"))
    );
}

function watch() {
    style();
    gulp.watch("app/scss/**/*.scss", gulp.series(["style"]));
}

exports.style = style;
exports.watch = watch;