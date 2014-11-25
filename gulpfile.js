/* jshint strict: false */

var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var stylish    = require('jshint-stylish');
var react      = require('gulp-react');
var gulpJest   = require('gulp-jest');
// var istanbul   = require('gulp-istanbul'); //TODO: enable once Jest works with Istanbul
// var coveralls  = require('gulp-coveralls'); //TODO: enable once Jest works with Istanbul
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var streamify  = require('gulp-streamify');
var source     = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify   = require('watchify');
var reactify   = require('reactify');

// Run Linting with JSHint
// ==================================
gulp.task('lint', function () {
  gulp.src(['./!(coverage|node_modules|bower_components)/**/!(build)/*.{js,jsx}'])
    .pipe( react({harmony: true}) )
    .pipe( jshint() )
    .pipe( jshint.reporter( stylish ) );
  });

// Run Jest Tests
// ==================================
gulp.task('jest', function () {
  return gulp.src(['./client'])
  .pipe(gulpJest({
    unmockedModulePathPatterns: ['node_modules/react'],
    // testDirectoryName: "__tests__", //__tests_ is the default
    testPathIgnorePatterns: ['node_modules'],
    moduleFileExtensions: [
      'js',
      'jsx',
      'json'
    ]
  }));
});

// TODO: once Jest works with Istanbul, setup code coverage
// Run Tests and Generate Coverage Data
// ====================================
// gulp.task('test', function (cb) {
//   gulp.src(['requestHandler.js'])
//     .pipe(istanbul()) // Instrument files
//     .on('finish', function () {
//       gulp.src(['spec.js'])
//         .pipe(mocha()) // Run Tests
//         .pipe(istanbul.writeReports()) // Creating the reports after tests runned
//         .on('end', cb);
//     });
// });

// TODO: once Jest works with Istanbul, setup code coverage
// Send Coverage Data to Coveralls
// ====================================
// gulp.task('coveralls', function(){
//   return gulp.src('./coverage/lcov.info')
//   .pipe(coveralls());
// });


// Watch & Build Client JS Bundle
// ====================================
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./client/app/app.jsx'], // Only need initial file, browserify finds the deps
    transform: [reactify], // We want to convert JSX to normal javascript
    debug: true, // Gives us sourcemapping
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });
  var watcher  = watchify(bundler);

  return watcher
  .on('update', function () { // When any files update
    var updateStart = Date.now();
    console.log('Updating!');
    watcher.bundle() // Create new bundle that uses the cache for high performance
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./client/app/build/'));
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  .bundle() // Create the initial bundle when starting the task
  .pipe(source('bundle.js'))
  .pipe(streamify(uglify()))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./client/app/build/'));
});
