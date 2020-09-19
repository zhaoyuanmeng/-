# Vue笔记

## 组件之间的传值

## 1.父子间的传值 注意变量命名不要冲突

快捷键vb 生成模板组件

### 父传子 props

：msg加那个：就会认为是一个常量里面的值就是要显示的值不会解析

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200702174519915.png)

![image-20200702172941265](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200702172941265.png)

### 子传父 绑定事件

![image-20200702172647478](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200702172647478.png)

![image-20200702172727478](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200702172727478.png)

### 方便的方法直接 this.$parent this.$children 

还可以获取到组件中的方法并且轻易使用方法 其中调用的this并不会发生变化 方法对应哪个组件就是哪个组件的this

![image-20200702173101898](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200702173101898.png)

##  非父子间传值

### 通过事件总线

原理是通过设置一个公共的js文件 引入vue对象实例 然后通过事件触发的方式进行传值

![image-20200708151638880](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708151638880.png)

第二步依次在需要传值的两个或者多个组件中引入这个文件 然后发送数据的组件中写$emit 接受数据的组件是$on

![image-20200708151928378](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708151928378.png)

![image-20200708152043851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708152043851.png)

### 

### 通过vuex





## 路由vue-router

### 路由基本配置

router.js配置

![image-20200708154911907](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708154911907.png)

除了传统的<router-link on='/home'> 可以使用函数式编程  以后进行判断的时候经常会使用这种方式

![image-20200708155209103](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708155209103.png)



### 动态路由的设置

router.js配置

![image-20200708160210432](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708160210432.png)

获取里面的id值

![image-20200708160311107](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708160311107.png)

### 嵌套路由

就是子路由写在父级路由里面通过设置父级组件的router-view来加载子路由的界面

![image-20200708161614549](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708161614549.png)

![image-20200708161728738](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708161728738.png)

这里面有趣的东西是 子路由必须等待父级路由加载完以后才可以加载自己的界面  最终都回到首页App那个组件中

动态路由传参注意name与params搭配 path与query  

![image-20200708162517660](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708162517660.png)

### 导航守卫 

一般是进行判断合法不合法 获取token啥的

main.js中写个钩子函数 因为main.js相当于是入口文件都会从这加载

![image-20200708162940786](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708162940786.png)

## vuex

其实就是为了简化公共数据的传值使用问题 相当于就是一个工厂

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708163244515.png" alt="image-20200708163244515" style="zoom:67%;" />

![image-20200708165832676](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708165832676.png)



![image-20200708165848973](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708165848973.png)



![image-20200708165902245](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708165902245.png)

使用辅助函数前先引用对应的对象模块

![image-20200708165950507](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708165950507.png)

组件中获取vuex中的属性值

![image-20200708170033604](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708170033604.png)



组件中操作vuex中的数据 是通过触发vuex里面的方法来间接改变值

![image-20200708170129191](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708170129191.png)

## node-sass

![image-20200725121744395](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725121744395.png)



## vue的生命周期



## 

为了减少渲染 为了区分sameNode

## 常用的数组方法

### map

### filter

### foreach



