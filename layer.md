### skin皮肤制作
    * 首先到layer这个目录下创建一个文件夹 myskin
    * 进入到myskin中创建一个css文件
    * 修改的时候 加body .layui-lbw .layui-layer-title {} 这里可以看defalt里面的          layer.css参考
    * 修改完成后到加载的那个html中书写js 进行全局配置layer.config {
      extends:myskin/.css,skin:layui-lbw}
    * 注意一定要细心 别打错单词 不然很low