const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const cssFiles = "source/scss/style.scss";
const cssDest = "static/css";
gulp.task("css", () => gulp.src(cssFiles)
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(postcss())
    .pipe(rename({suffix: "8"}))
    .pipe(gulp.dest(cssDest))
);
