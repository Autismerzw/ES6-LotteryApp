/*
* @Author: 16469
* @Date:   2017-07-26 19:21:31
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:14:25
*/

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browesr',(cb)=>{
	if(!gulp.watch) return cb();
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
})