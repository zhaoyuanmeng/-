/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-17 18:46:24
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-17 18:54:06
*/

'use strict';

let a = {
    name:'zyd'
}

let b = {
    name:"zyd"
}

let c = a

// 引用类型的判断 判断的是引用地址是不是相同
console.log(b==a)  //false
console.log(b===a) //false
console.log(c===a) //true


/* 三等号===:

　　（1）如果类型不同，就一定不相等

　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）

　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。

　　（4）如果两个值都是true，或是false，那么相等

　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等

　　（6）如果两个值都是null，或是undefined，那么相等
*/
let f = '1'
let g = 1
console.log(f===g) //false
console.log(f==g) //true
console.log(undefined === null) //false
console.log(NaN === 1) //false

/*双等号==：

　　（1）如果两个值类型相同，再进行三个等号(===)的比较

　　（2）如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：

　　　　1）如果一个是null，一个是undefined，那么相等

　　　　2）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较
*/





