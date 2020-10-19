/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-18 10:59:32
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-19 22:28:34
*/


//commonjs四个变量 moudle.exports exports glabal require


/*
 * 注意！！！！！！！！！！
 * 每个文件就是一个模块，每个模块都有独立的作用域，内部所有变量、函数对其他模块都是不可见的
 * 可以通过module.exports 和 exports对模块进行导出，module代表当前模块
 * 可以在另一个文件中通过require进行导入
 * 每个模块可以多次加载但是只会在第一次加载时运行，然后会被缓存供后续加载时使用
 * 按照代码出现顺序同步加载
 */


// 导出方式1
module.exports.Test = function(){
    console.log('hhh')
}


// 导出方式2
exports.Test2 = function(){
    console.log('hihihi')
}

// 这个方式也行，这样导出多个还方便点只能使用module.exports
module.exports = {
    add:'add',
    asds:'sad'
}

/**
 * 两种导出的区别
 * 可以理解为exports是module.exports的引用，如果exports调用之前调用了exports=..，就无法通过exports来导出模块内容，当然也不能写成exports=..这种形式
 */
