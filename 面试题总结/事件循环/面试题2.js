/*
* @Author: ZhaoYuanDa
* @Date:   2020-10-22 22:39:47
* @Last Modified by:   ZhaoYuanDa
* @Last Modified time: 2020-10-22 22:44:07
*/

'use strict';
console.log('1');

setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })

    process.nextTick(function() {
        console.log('3');
     })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 1 7 6 8 2 4 3 5 9 11 10 12