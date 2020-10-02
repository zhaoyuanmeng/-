/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-02 16:00:41
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-02 16:59:11
*/

/**
 * indexOf
 * 参数:要查找的项和起点位置（可选的）
 * 返回值：返回下标位置，没有返回-1
 */
function index_of(){
    let arr = ['a','b','c']
    console.log(arr.indexOf('a')) // 0
    console.log(arr.indexOf('d')) //-1
}
//index_of()

/**
 * join 把数组转换成字符串，然后给他规定个连接字符，默认是逗号。
 * 参数 中间连接的字符
 * 返回值  返回一个字符串
 */
function join_arr(){
    let arr = ['a','b','c']
    console.log(arr.join('-'))
}
// join_arr()

/**
 * reverse 反转数组项的顺序
 * 原数组改变
 */
function reverse_arr(){
    let arr = [1,2,3]
    console.log(arr.reverse())
}
// reverse_arr()

/**
 * concat 将数组添加到原数组中，先创建当前数组的一个副本，然后把该值放进去。
 * 参数 要添加的元素可以是任何数据类型，数组也可以
 * 返回值 返回那个副本数组
 */
function concat_arr(){
    let arr = ['a','b','c']
    console.log(arr.concat(1,[2,'c'])) //['a','b','c',1,2,'c']
}
//concat_arr()




/*
 * splice 删除功能
 * 参数2个 要删除第一项的位置和删除的项数
 * 返回值 删除的结果组成一个数组，会影响之前的数组
 */
function splice_del(){
    let arr = [1,2,3,5]
    console.log(arr.splice(0,2)) //1  2
    console.log(arr) // 3 5
}
//splice_del()

/*
 * splice 插入功能
 * 参数3个 起始位置，0，要插入的项（可以是多个）  如果插入的是一个数组，不会把他拆成一维数组，而是把数组整个放进去当一个元素
 * 返回值为[]
 */

function splice_insert(){
    let arr = [1,2,3]
    console.log(arr.splice(0,0,[4,5],66))
    console.log(arr)
}
//splice_insert()



/*
 * forEach 对数组进行循环遍历，对数组中的每一项运行给定函数。
 * 参数都是function类型
 * 没有返回值
 */
 function forEach_arr(){
    let arr = [1,2,3,'a']
    arr.forEach((x,index,a)=>{
        // x : 元素值
        // index : 索引下标
        // a 数组本身
        console.log(x + '|' + index + '|' + (arr === a))
    })
 }

 // forEach_arr()





/*
 * slice 返回从原数组中指定开始下标到结束下标之间的项组成的新数组。
 * 参数 1或两个 1个的时候就是从第一个参数到结尾
 * 返回值 返回新数组，原来的数组不会改变
 */
function slice_arr(){
    let arr = [1,2,3]
    let arr1 = arr.slice(1)
    let arr2 = arr.slice(0,2)
    console.log(arr)  // 1 2 3
    console.log(arr1) // 2 3
    console.log(arr2) // 1 2
}
slice_arr()


/*
 * filter 过滤的功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
 * 参数 function
 * 返回值 一个新的数组
 */
function filter_arr(){
    let arr = [1,2,3]
    let arr2 = arr.filter(item=>{
        return (item % 2) === 0
    })
    console.log(arr2)
}
// filter_arr()
/*
 * map 对数组中每一项运行给定函数，返回每次函数调用组成的数组
 * 参数 function
 * 返回值 一个新的数组
 */

 function map_arr(){
    let arr = [1,2,3]
    let arr2 = arr.map(item=>item * item)
    console.log(arr)
    console.log(arr2)
 }
 //map_arr()