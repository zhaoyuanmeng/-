/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-02 17:04:31
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-07 17:00:27
*/

function copy_deep(obj){
   let res = typeof obj === 'object' ? {} : []

   for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            if(typeof obj[key] ===  'object'){
            res[key] = copy_deep(obj[key])
            }else{
                res[key] = obj[key]
            }
         }
   }
   return res
}



function deep(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deep(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}


let obj = {
    a:'zyd',
    age:18,
    color:{
        c:"ss"
    }
}


let obj2 = deep(obj)
let obj3 = copy_deep(obj)
obj3.a = 'sda'
console.log(obj)
console.log('-------------')
console.log(obj2)
console.log(obj3)




console.log('浅拷贝部分---------')
let a = {
  name:"age",
  city:{
    name:"沧州"
  }
}
let b = Object.assign({},a)
// 只有a这个对象会改变
a.name="ssss"

// a,b都会改变
b.city.name="asd"

console.log(a)
console.log(b)



