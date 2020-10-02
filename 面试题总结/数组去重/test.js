/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-02 15:29:00
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-02 16:00:31
*/

/**
 * 方法1 利用set的方式
 *
 */
let arr = ['a','b','a',NaN,NaN,undefined,undefined,null,null,true,false,true,{},{}]
console.log(arr)

function set_arr(arr){
    return Array.from(new Set(arr))
}
// 缺陷是空对象不会被消除掉
//console.log(set_arr(arr))

/**
 * 方法2双重for，然后splice去重
 */

function for_arr(arr){
    for (let i = 0; i < arr.length; i++) {
     for (let j = i+1; j < arr.length; j++) {
           if(arr[i] === arr[j]){
            // splice操作会更改原来的数组
                arr.splice(j,1)
                // 这里必须-1 因为下一次j+1会跳过下一个
                j--
           }
        }
    }
    return arr
}
NaN !== NaN  {} !== {} null直接消失了
console.log('for--------'+for_arr(arr))

/**
 * 第三个利用indexOf去重
 */
function index_arr(arr){
    var array = []
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1 ) {
            array.push(arr[i])
        }
    }
    return array
}

console.log(index_arr(arr))

/**
 * 第四种利用sort
 */
function sort_arr(arr){
    if (!Array.isArray(arr)) {
        console.log('不是数组')
        return
    }
    let array = []
    // 排序
    arr = arr.sort()
    // 相邻两个数的比较
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            array.push(arr[i])
        }
    }
    return array
}
sort_arr(arr)
console.log(sort_arr(arr))
