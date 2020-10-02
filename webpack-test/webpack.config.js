const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

// webpack的配置文件遵循着commonJS规范
module.exports = {
    // 入口文件位置
    entry: './src/index.js',
    // 出口文件
    output: {
        // resolve是把相对路径转换为绝对路径
        path: path.resolve("./dist/"), //必须是绝对路径
        filename: "bundle.js", //输出的名字
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    // watch:"true" //这样直接build就行 不用执行那个watch的命令
    devServer: {
        open: true,
        compress: true,
        port: '3000',
        // contentBase: './src'
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}