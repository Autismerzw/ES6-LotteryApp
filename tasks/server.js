/*
* @Author: 16469
* @Date:   2017-07-26 19:03:54
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:13:58
*/

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
	if(!args.watch) return cb();

	var server = liveserver.new(['--harmony','server/bin/www'])
	server.start();
	// 监听前端文件改变，热更新
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})
	// 监听服务器改变，重启服务
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()
	});

})