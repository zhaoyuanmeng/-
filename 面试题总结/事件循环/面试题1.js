/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-22 22:18:23
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-22 22:36:06
*/

'use strict';
console.log('打印'+1);


setTimeout(function(){
    console.log('打印'+2);
})

new Promise(function(resolve,reject){
        console.log('打印'+3);
        resolve()
      }).then(()=>{
        console.log('打印'+4)
      })

console.log('打印'+10);

new Promise(function(resolve,reject){
      setTimeout(function () {
        console.log('打印'+5);
      });
  }).then(
  console.log('打印'+6));


setTimeout(function(){
    new Promise(function(resolve,reject){
        console.log('打印'+7);
      });
})


//  1 3 4 10 6 2 5 7