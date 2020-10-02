## 1.webpack的功能

​	

## 2.webpack的安装

* 全局安装webpack

  npm i webpack webpack-cli -g

* 项目中安装webpack(推荐)

  npm i webpack webpack-cli -D

## 3.webpack的使用

* ### 3.1webpack-cli的使用

  ​	npx可以执行项目中引入的包的命令 比如npx webpack 会自动去/src/index.js下去打包

  ​	npx的原理：先判断是不是全局的命令，不是的话就在当前项目中找node_moudles

* ### 3.2webpack的配置

  * 入口（entry）：程序的入口js
  * 输出（output）：打包后存放的位置
  * loader：用于对模块的源代码进行转换
  * 插件（plugins）：插件目的在于解决loader无法实现的其他事
  * 配置webpack.config.js
  * 运行npx webpack

* ### 3.3开发时自动编译工具

  * webpack-dev-server
    * --contentBase src 把项目的根目录托管到src这个目录中 因为index.html可能是放src下的
    * --open 自动打开浏览器
    * --hot 热加载
    * --compress 压缩
    * --port 更改端口号
  * watch模式

* ### 3.4html插件（html-webpack-plugin ）

  * 注意点是不用再重新加载那个内存中的js文件了，它自动为你加载好
  * dist生成的目录放到服务器下，不能以静态的方式打开

  