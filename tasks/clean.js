/*
* @Author: 16469
* @Date:   2017-07-26 19:30:59
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:14:12
*/

'use strict';
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})
