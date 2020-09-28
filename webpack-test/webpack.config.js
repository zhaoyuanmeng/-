const path = require('path')

// webpack的配置文件遵循着commonJS规范
module.exports = {
    // 入口文件位置
    entry: './src/index.js',
    // 出口文件
    output: {
        // resolve是把相对路径转换为绝对路径
        path: path.resolve("./dist/"), //必须是绝对路径
        filename: "bundle.js" //输出的名字
    },
    mode: "development"
}