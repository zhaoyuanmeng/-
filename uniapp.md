# 基础部分



## 模板语法

与Vue一样  例如 :class @click 等等 

## 数据绑定

{{变量名}}

## 条件判断

总结出这个用法跟Vue一样

![image-20200808153920994](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808153920994.png)

## 列表渲染

这个用法也跟Vue一样

![image-20200808154211012](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808154211012.png)

## 基础组件使用

在uni-app官网上自己查文档看，不用背到了项目用到的时候在查

## 自定义组件的使用

与Vue一样 传参也一样 slot也一样

第一实现该组件

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808160333891.png" style="zoom:80%;" />

第二注册该组件

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808155726628.png" alt="image-20200808155726628" style="zoom:80%;" />

第三使用该组件并且传递过参数color

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808160205558.png)

## 基础api用法

从官网上查 用到啥查啥就行了

## 条件编译

![image-20200808161726036](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808161726036.png)

## 页面布局

引入外部css

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808162332373.png" alt="image-20200808162332373"  />

page 相当于body

![image-20200808162141736](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808162141736.png)

单位可以用 px rpx(基于750px的基准换算) vh vm rem

布局尽量使用flex

## 生命周期（很重要）



### 应用生命周期（App.vue）

![image-20200808180106212](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808180106212.png)

### 页面生命周期  (index.vue)

![image-20200808180146873](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808180146873.png)

### 组件生命周期  (btn.vue)

![image-20200808180220064](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808180220064.png)



### 整体的流程

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200808175901168.png)



# 项目部分



## 环境配置

### 1.微信小程序配置

首先更改微信工具的安全设置

![image-20200809081839573](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809081839573.png)

更改Hbulid的配置

![image-20200809081859820](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809081859820.png)

### 2.安卓真机连接

首先通过数据线连接起来

进入手机的开发者模式 打开USB调试



## 项目结构

components ---- 自定义组件的目录（自己创建的）

pages ---- 页面存放目录

static ---- 静态文件资源目录

unpackage ---- 编译后的文件存放目录

utils ---- 公用的工具类（自己创建的）

common ---- 公用的文件

App.vue ---- 页面入口文件 加载会首先进入这个文件 这里面的样式是全局的 一般逻辑写登录啥的

main.js ---- 应用入口  一般是引入三方库 加载插件 定义全局变量啥的 

manifest.json ---- 项目配置（微信那个id ES6转ES5）

pages.json ---- 全局页面的配置（导航栏 页面头信息 Tab啥的）

uni.scss ---- 系统自己注册的文件 不用再引入了直接使用就行

## TabBar

好处是他不会重新渲染数据 相当于有缓存 如果必须要重新渲染就使用 onTabItemTab监听事件 他

![image-20200809085654414](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809085654414.png)

![image-20200809085713420](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809085713420.png)

## scss

变量

![image-20200809094624223](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809094624223.png)

&表示父级  

更多的需求看文档在书写就好了

## uniCloud云开发

### 开发流程

项目-----云环境----编写代码----云函数----serverless----调用

### uniCloud构成

### 云函数

运行在云端的（服务器端）的函数

记得每次改完以后要重新上传部署

坑是context不能直接原样返回 他是一个深度对象只要获取自己想要获取的环境就行了 比如appid

### 云存储和CDN

增加数据

![image-20200809112603488](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809112603488.png)

删除数据

![image-20200809112829601](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200809112829601.png)

更新数据

