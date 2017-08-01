/*
 * @Author: 16469
 * @Date:   2017-07-26 16:17:33
 * @Last Modified by:   16469
 * @Last Modified time: 2017-07-26 21:13:53
 */

'use strict';
import gulp from 'gulp'; //负责自动编译
import gulpif from 'gulp-if'; //gulp中做语句判断的
import concat from 'gulp-concat'; //gulp处理文件凭借
import webpack from 'webpack'; //打包工具
import gulpWebpack from 'webpack-stream'; //基于数据流的打包工具
import named from 'vinyl-named'; //文件重命名标记
import livereload from 'gulp-livereload'; //热更新
import plumber from 'gulp-plumber'; //处理文件信息流的包
import rename from 'gulp-rename'; //文件重命名的包
import uglify from 'gulp-uglify'; //处理js/css压缩
import { log, colors } from 'gulp-util'; //命令行输出
import args from './util/args'; //命令行参数解析
/**
 * task是gulp 的api 用于创建一条命令，
 * 此时我们将命令名民为scripts并在后面写下他所执行的函数命令
 **/
gulp.task('scripts',()=>{
	//打开该目录下的js文件
    // 处理错误逻辑，改变默认处理错误机制
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    // 将文件重新命名
    .pipe(named())
    // 编译js/使用webpack的babel加载器编译
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    // 压缩文件，将文件备份切重命名
    .pipe(gulp.dest('server/public/js'))
    // 压缩文件，将文件备份切重命名
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    // 配置如何压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    // 存入文件夹
    .pipe(gulp.dest('server/public/js')) 
    //判断是否有监听命令，如果有热更新 
    .pipe(gulpif(args.watch,livereload()))
})

