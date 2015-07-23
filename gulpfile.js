"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var less = require("gulp-less");
var rename = require("gulp-rename");
var shell = require("gulp-shell");
var concat = require("gulp-concat");
var markdown = require("gulp-markdown");
var insert = require("gulp-insert");
var runSequence = require("run-sequence");
var clean = require("gulp-clean");
var minifyCSS = require("gulp-minify-css");
var htmlreplace = require("gulp-html-replace");
var deploy = require("gulp-gh-pages");

gulp.task("default", ["watch"]);

gulp.task("watch", function () {
  gulp.watch("public/css/**", ["compile-less-dev"]);
});

gulp.task("jshint", function () {
  return gulp.src([
      "public/js/**/*js"
    ])
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("compile-less-dev", function () {
  return gulp.src("public/css/imports.less")
    .pipe(less({
      paths: ["public/css/"],
      modifyVars: {
        "@ionicons-font-path": "'../bower_components/ionicons/fonts'"
      }
    }))
    .pipe(rename("combined.css"))
    .pipe(gulp.dest("public/build/"));
});

gulp.task("compile-less-prod", function () {
  return gulp.src("public/css/imports.less")
    .pipe(less({
      paths: ["public/css/"],
      modifyVars: {
        "@ionicons-font-path": "'assets'"
      }
    }))
    .pipe(rename("combined.css"))
    .pipe(gulp.dest("public/build/"))
    .pipe(minifyCSS())
    .pipe(rename("combined.min.css"))
    .pipe(gulp.dest("public/build/"));
});

gulp.task("bundle-js", ["publish-articles"], shell.task([
  "node node_modules/.bin/r.js -o public/build/build.js"
]));

gulp.task("publish-articles", function () {
  return gulp.src(["./public/articles/*.md"])
    .pipe(markdown())
    .pipe(insert.wrap("<div class=\"portfolio-item\">", "</div>"))
    .pipe(concat("content.build.html"))
    .pipe(gulp.dest("./public/templates/projects/"));
});

gulp.task("clean", function () {
  return gulp.src("dist")
    .pipe(clean());
});

gulp.task("copy-scaffolding", function () {
  return gulp.src([
      "public/images/favicon.ico",
      "public/build/combined.min.css",
      "public/index.html",
      "CNAME"
    ])
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-assets", function () {
  return gulp.src([
      "public/bower_components/ionicons/fonts/ionicons.woff",
      "public/bower_components/ionicons/fonts/ionicons.ttf"
    ])
    .pipe(gulp.dest("dist/assets"));
});

gulp.task("replace-html-blocks", function () {
  return gulp.src("dist/index.html")
    .pipe(htmlreplace({
      "js": "combined.js",
      "css": "combined.min.css",
      "favicon": {
        src: "favicon.ico",
        tpl: "<link href=\"%s\" rel=\"icon\">"
      }
    }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("build", function (callback) {
  runSequence(
    "clean",
    "compile-less-prod",
    "bundle-js",
    "copy-scaffolding",
    "copy-assets",
    "replace-html-blocks",
    callback
  );
});

gulp.task("deploy-static", ["build"], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy());
});
