const gulp = require("gulp");
const del = require("del");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");

const jsFiles = ["node_modules/jquery/dist/jquery.js", "node_modules/tether/dist/js/tether.js", "node_modules/bootstrap/dist/js/bootstrap.bundle.js", "source/js/*.js"];
const jsDest = "static/js";
gulp.task("scripts", () => gulp.src(jsFiles)
    .pipe(concat("bundle.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
);

const cssFiles = "source/scss/style.scss";
const cssDest = "static/css";
gulp.task("css", () => gulp.src(cssFiles)
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest(cssDest))
);
