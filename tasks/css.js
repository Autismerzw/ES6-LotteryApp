/*
* @Author: 16469
* @Date:   2017-07-26 18:59:50
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:14:07
*/

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server'))
})