/*
* @Author: 16469
* @Date:   2017-07-26 19:36:15
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 19:41:02
*/

'use strict';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('bulid',gulpSequence('clean','css','pages','scripts',['browesr','server']));

