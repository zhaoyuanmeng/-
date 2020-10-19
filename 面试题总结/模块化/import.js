/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-18 10:59:57
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-19 22:22:33
*/


// 正常导入  a b c 对应es6中export暴露的属性
import {a,b,c} from './es6.js'

// 加载整个模块（无输出） 一般就是加载静态页面啥的
import 'static'

// 加载整个模块（有输出）defalut的不会输出来
import * as zyd from 'es6.js'