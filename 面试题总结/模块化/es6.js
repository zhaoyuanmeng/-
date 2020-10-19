/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-18 10:59:22
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-19 22:53:33
*/

// ES6 module在编译时就确定依赖关系，所有加载的其实都是引用，这样做的好处是可以执行静态分析和类型检查。


// 导出方式1
export var first = 'test'
export function func(){
    return true
}


// 导出方式2

var a = 'sd'
var b = 'ds'
function s(){
    console.log('sad')
}
// 必须要有{}包括着
export {a,b,s}

// as关键字
var c = 'test'
export {c as d}


// export default 会导出默认输出，即用户不需要知道模块中输出的名字，在导入的时候为其指定任意名字
export default function(){
    console.log('foo')
}

// 错误的情况 因为export default 导出的是一个叫default的变量，所以后面不能跟声明语句
// export default只能使用一次
export default var a = 1 //false



// ！！！！！！重要的地方来了
// export 要求暴露的必须是接口，接口与模块内部变量一一对应，而不能直接输出值，因为所有的导入都是引用
 export 1 //false

var a = 1
export a //false
export {a} //true  用一个{}包括起来就相当于弄了一个接口暴露出去

//等价的是
export var a = 1

function f(){

}
export f //false
export {f} //true