/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-18 10:59:48
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-19 21:44:29
*/


/**
 * 加载过程
 * 优先从缓存中加载
 * 如果缓存中没有，检查是否是核心模块，如果是直接加载
 * 如果不是核心模块，检查是否是文件模块，解析路径，根据解析出的路径定位文件，然后执行并加载
 * 如果以上都不是，沿当前路径项向上逐级递归，直到跟目录的node_modules目录
 *
 */

const mydle = require('./common.js') //如果没有后缀，会自动按照.js .json .node的次序进行补齐查找

// 相当于导出的就是exports(module.exports)这个对象
console.log(mydle)


