'use strict'

const gulp = require('gulp')
const mocha = require('gulp-mocha')

gulp.task('test', function() {
  return gulp.src('test/*.js', {read:false})
    .pipe(mocha({
      reporter: 'spec'
    }))
})

const watcher = gulp.watch('./**/*.js', ['test'])
watcher.on('change', function(event) {
  console.log('re-running');
})
