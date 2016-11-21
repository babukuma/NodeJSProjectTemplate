"use strict";
const gulp = require("gulp");
// check style for typescript
const tslint = require("gulp-tslint");
// compile typescript
const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');
// for testing
const mocha = require('gulp-mocha');
// for coverage
const istanbul = require('gulp-istanbul');

gulp.task('build', () => {
    var tsResult = gulp.src("src/app/**/*.ts")
        .pipe(tslint({
            tslint: require("tslint"),
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task('compile_test', () => {
    var tsResult = gulp.src("src/test/**/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('test'));
});

gulp.task('pre-test', function () {
    return gulp.src('app/**/*.js')
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['compile_test', 'pre-test'], () => {
    return gulp.src("test/**/*_test.js")
        // Unit test
        .pipe(mocha())
        // Creating the reports after tests ran
        .pipe(istanbul.writeReports())
        // Enforce a coverage of at least 90%
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('default', ['build', 'test']);