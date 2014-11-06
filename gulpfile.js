var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');

gulp.task('mocha', function () {
  return gulp.src('index.spec.js', {read: false})
        .pipe(mocha());
});

gulp.task('test', function (cb) {
  gulp.src(['requestHandler.js'])
    .pipe(istanbul()) // Instrument files
    .on('finish', function () {
      gulp.src(['spec.js'])
        .pipe(mocha()) // Run Tests
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('coveralls', function(cb){
  return gulp.src('./coverage/lcov.info')
  .pipe(coveralls());
});