# 模块化规范
```
* 模块化就是把单独的一个功能封装到一个模块（文件）中，模块之间相互隔离，但是可以通过
  特定的接口公开内部成员，也可以依赖别的模块
* 浏览器端规范（落伍了）
    * AMD  
    * CMD  
* 服务器端规范
    * CommonJS
        1. 模块分为单文件和包
        2. 模块成员的导出：module.exports 和 exports
        3. 模块的导入 require('模块标识符')
* ES6模块规范（主流）
    * 每一个js文件都是一个独立的模块
    * 导入模块成员使用 import关键字
    * 暴露模块成员使用 export关键字
* Node中使用babel插件体验ES6规范
    1. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    2. npm install --save @babel/polyfill
    3. 项目根目录创建babel.config.js
    4. babel.config.js文件进行基础设置
    5. 通过npx babel-node index.js 执行代码    
```
# ES6基础语法使用

    * 默认导出与默认导入
        1.export default 默认导出的成员
        2.import 接受名称 from '模块标识符'
    * 按需导出与导入
        1. export let s1 = 10
        2. import {s1} from '模块标识符'
    * 直接导入并执行模块代码
        * import '模块标识符'           
# webpack概述
    * webpack是一个流行的前端项目构建工具（打包工具），可以解决当前web中的问题
    * 提供了友好的模块化支持，以及代码压缩混淆 处理js兼容问题 性能优化等
    * 现在都是使用webpack打包构建
# webpack的安装和配置
    * 运行npm install webpack webpack-cli -D 命令安装webpack相关的包
    * 在项目的根目录中，创建webpack.config.js 的webpack配置文件
    * 再配置文件中初始化配置 module.exports = {mode:'development'} 
    * mode是用来指定构建模式的
    * 再package.json中的scripts节点下新增dev脚本 "dev":"webpack"
    * scripts节点下的脚本可以通过npm run 执行
    * 在终端执行npm run dev 就开始webpack打包了  
    * 执行以后生成dist文件替换为里面的main.js
    * 如果更改完代码记得重新打包一下    
# webpack基本使用
    * 新建一个项目空白目录 运行npm init -y,初始化package.json
    * 建立源代码目录src 并写个首页index.html
    * 运行npm install jquery -S 安装jq
    * 通过模块化的形式实现列表隔行变色功能
    * 执行的时候因为是es6语法所以用webpack倒换一下（兼容性）  

 # 配置打包的入口与出口
    * 默认打包的入口文件为src->index.js
    * 默认打包的输出文件为dist->main.js
    * 修改位置的话配置webpack.config.js
    * 增加entry output两个属性

# 自动打包
    * 自己每次打包太麻烦
    * 首先安装支持项目自动打包的工具
    * npm install webpack-dev-server -D
    * 修改package.json中的scripts 改成"webpack-dev-server"
    * 更改index.html里面js引入路径为 /zyd.js
    * 因为输出的zyd.css托管在 / 他是一个直接加载在内存中的 并没有在磁盘上
    * 运行npm run dev
    * 浏览器访问http://localhost:8080查看结果
    
    * webpack-dev-serve 会启动一个实时打包的一个http服务器
    * 打包生成的输出文件 默认放到项目根目录中是虚拟的看不见的
# 配置html-webpack-plugin生成预览页面
    * 运行npm install html-webpack-plugin -D 安装插件
    * 修改webpack.config.js 文件
    * 