/*
* @Author: 16469
* @Date:   2017-07-26 18:53:38
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:13:48
*/

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')//打开app文件夹下的所有模板文件
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()))
})