/*
* @Author: 16469
* @Date:   2017-07-25 09:30:38
* @Last Modified by:   16469
* @Last Modified time: 2017-07-26 21:16:26
*/

'use strict';
import yargs from 'yargs';
// 区分线上环境和开发环境
const args = yargs
	
	.option('production',{
		boolean:true,
		default:false,
		describe:'min all scripts'
	})
	//是否 监听文件改动并自动编译
	.option('watch',{
		boolean:true,
		default:false,
		describe:'watch all files'
	})
	// 是否输出详细编译日志
	.option('verbose',{
		boolean:true,
		default:false,
		describe:'log'
	})
	// 源码映射
	.option('sourcemaps',{
		describe:'force the creation of sourcemaps'
	})

	// 本地服务器
	.option('port',{
		string:true,
		default:8000,
		describe:'server port'
	})

	.argv
export default args;

