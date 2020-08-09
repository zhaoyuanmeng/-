# 第一天

##  1.1基本标签

- div标签用来布局的没有具体含义
- hx标题的意思 h1-h6
- p标签表示段落相当于一个回车 自己在代码里写回车是不会产生效果的
- br主要实现的是换行
- hr产生一个水平线
- a标签 超链接实现链接跳转 重要属性href=“地址” 
- img用来加载外部图片 src属性：图片的地址
- span也是用来布局的不过他不独占一行 用于行内布局
- ul/ol 前者是无序列表后者是有序列表 她们的列表内容都用的是li标签 ul>li*3

## 1.2标签属性的使用

- 属性名=“属性值”
- 起附加信息的作用
- 不是所有标签都有属性 比如br标签

## 1.3文本格式化标签

###  文本格式化标签主要用来美化文本外观

- b和strong：都有加粗作用但是strong除了加粗还有强调作用且都是行级标签（不会自动换行） 主要是用来seo优化时提取关键字
- i和em：把文字倾斜，em具有强调作用；如果只是简单的倾斜i就可以比如添加图标
- pre：预格式化文本，保留换行和空格及宽度，用的比较少；文字的字号用的是浏览器最小字号
- q:短文本引用
- address： 为网页加入地址信息
- caption ：表格的信息标题
- small big:分别让文字缩小一号和扩大一号；big在HTML5淘汰掉了但是并没有删除尽量不要使用这个
- 浏览器支持的最小字号为12px，如果要显示比它还小的字，需要做处理
- sub sup:设置文本为下标和上标  例如x1+x2 = y

## 1.4HTML实体转义

![image-20200526154501372](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526154501372.png)



## 1.5行内元素和块级元素

- 块级元素：会独占一行，其宽度自动填满父级元素的宽度，可以设置width 和height；常见的元素有address、dir、div、dl、dd 、from h1-h6、hr、menu、ol、p、pre、table、ul
- 行内元素：不会独占一行，相邻行内元素排在同一行。宽高无效。如a  b  br  em font  i   img select  span strong textarea  
- 块级元素里面可以包含块级元素和行级元素  （相当于执行了display：block）
- 行内元素里面只能包含行级元素  当于执行了（display：incline）
- 转化是通过display：block和incline

## 1.6标签嵌套原则

- 块级元素可以包含内联元素（行内元素）或者某些块元素。但是内联元素不能包含块元素。只能包含其他的内联元素。

  <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526161828180.png" alt="image-20200526161828180" style="zoom:80%;" />

- 块级元素不能放在p标签里面

- 有几个特殊的块级元素只能包含内嵌元素，不能在包含块级元素。分别是：h1-h6 p dt

- 块级元素与块级元素并列，内联元素与内联元素并列

![image-20200526161553127](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526161553127.png)这是错误的

![image-20200526161629293](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526161629293.png)这是正确的

# 第二天

## 2.1HTML属性

1. 标签由标签名、标签属性、和文本内容组成。
2. 标签属性是对标签的一种描述。
3. 标签属性分为通用属性、自有属性和自定义属性。
4. 通用属性：所有标签都有的属性

​		通用属性有：

​				id:用来给标签取唯一的一个名词

​				class：用来给标签取一个类名

​				style：用来设置改标签的行内样式

​				title：当鼠标移到该标签，所显示的提示内容。

   5.自定义属性：用于传值或者用于图片懒加载等方面

​			格式：data-*

​						<img data-src="address">

## 2.2表格

**table主要用于呈现数据和格式化数据**

​	![image-20200526225133541](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526225133541.png)

**table属性**{

​	border:表格边框，默认单位是像素

​	width:表格宽度，默认单位是像素

​	align：整个表格对齐方式（left默认）、center、right

​	cellpadding:单元格文本与边框的距离

​	cellspacing：单元格边框			

}

**跨行跨列**

​		<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526231642802.png" alt="image-20200526231642802" style="zoom:67%;" />![image-20200526231708438](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526231708438.png)

**完整表格组成**：caption（标题）thead（表头）tbody（表体）tfoot（表尾）四部分组成

​				<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526232558112.png" alt="image-20200526232558112" style="zoom:67%;" />



![image-20200526232533978](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200526232533978.png)

## 2.3表单

from表单是实现前后端交互的重要标签。

常用属性：{

​	name:表单属性

​	action：表单数据提交到的地方，通常是一个后端文件名或者网址。#就是提交到当前文件

​	method：前端提交数据到后端的方法。主要有GET和POST，默认是GET

}

表单元素：{

​	input类：主要用来输入，或者发出指令。

​		type：text/password/radio/checkbox/file/button/image/submit/reset

​				text:单行文本输入框 type=“text”可以不写，默认值。

​						属性：placeholder（提示文本）；name（命名传送到后台的key） ；minlength（最少输入的字符个数）；disabled（失									效）；readonly（只读不能修改）readonly和disabled只是外观有区别。

​									value（默认值）/pattern（用来正则匹配的 一般是用来验证密码啥的）

​				password:密码框 属性与text一样。

​						属性：placeholder（提示文本）；name（命名传送到后台的key） ；minlength（最少输入的字符个数）；disabled（失									效）；readonly（只读不能修改）readonly和disabled只是外观有区别。

​									value（默认值）/pattern（用来正则匹配的 一般是用来验证密码啥的）

​				radio:单选框，通常是两项以上。

​						属性：name（必须要有 一组的要使用同一个）value（默认值） checked(选中) disabled（失效）；readonly（只读不能									修改）。

​				checkbox：复选框，可以用来选择一项或多项。

​						属性：name（必须要有 一组的要使用同一个）value（默认值） checked(默认选中) disabled（失效）；readonly（只读									不能修改）

​				file：文件上传的按钮。

​				button：普通按钮，通常用它去调用脚本代码。

​						属性：value（按钮的标题）  disabled（失效）。

​				image：图片按钮，用法与button一模一样。有一个特殊属性：src（用来加载提示图片，用它替换了value）。

​				submit：提交按钮，用来将表单数据提交到后台。

​						属性：value（按钮的标题）  disabled（失效）。

​				reset：重置按钮，将表单所有组件输入的内容全部清空。

​						属性：value（按钮的标题）  disabled（失效）。

​	textarea类

​				文本域（也可以叫多行文本框），用来输入大批量的内容。

​				常用属性：name/id/cols/rows/placeholder/minlength/maxlength/required(必须输入)/value

​	select类

​				下拉列表框，默认用于单项选择。

​				multiple属性：表示可以多选，

​				size：最多显示的行数

​	button类	

​				普通按钮，具有提交功能。可以单独使用，不写在form元素中，如果写在form中，有提交功能。

​				form里面写button相当于submit

​				form外面写的button是用来调用js代码的

}

## 2.4iframe框架集

​	是用来将多个网页文件组成一个文件。

​	常用的属性{

​			name：框架名

​			src：引入的外部HTML文件

​			scrolling：滚动条（yes、no、auto）

​			width：宽度

​			height：高度

​			frameborder：是否有边框（1、0）

​			marginheight：框架离顶部和底端的距离

​			marginwidth：框架离左右的距离

}

![image-20200528213352290](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528213352290.png)

​			

注意：在实际开发中，尽量减少使用iframe，因为它破坏了前进和后退功能，且不利于SEO

# 第三天

## 3.1css基础语法

 三部分组成：**选择器、属性、属性值**。

选择器 {

​		属性：属性值；

​		属性：属性值；

}



## 3.2四种引用方式

行间样式

![image-20200528221818578](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528221818578.png)

内部样式

![image-20200528221846677](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528221846677.png)

外部样式

![image-20200528221914243](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528221914243.png)



**在实际开发中最多使用外部样式。不怎么使用@import方式**



## 3.3css选择器

1. ​		*：匹配HTML所有的元素；注意它的性能非常差，因为它要匹配所有元素，不建议使用。
2.   	  标签：匹配某一类标签
3. ​		类选择器：用来选择class命名的标签
4. ​		id选择器：用来选择id命名的标签。
5. ​		派出选择器：根据上下文选择标签。例子 ：.box li li{}
6. ​		伪类选择器（后面学）

## 3.4选择器分组

让多个选择器（元素）具有相同的样式，一般用于设置公共样式。

![image-20200528224315433](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528224315433.png)





## 3.5选择器继承

子元素可以继承父元素的样式，反之不可以。

![image-20200528224903738](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200528224903738.png)



## 3.6*优先级

内联样式：style=“ ”；

**！important:特定的用法加在样式的后面。在修改框架的属性可以添加。**

如果这三种样式作用于同一个元素上一般情况如下：（外部样式）<（内部样式）<（内联样式）但是*的优先级是最低的

！important(10000)>内联样式（1000）>id选择器（100）>类、伪类选择器（10）>标签（1）



## 3.7css字体

- font-size：字号  {number+%相对于父级字体的大小}

- font-family：字体

- font-style：样式 {normal默认   italic斜体}

- font-weight：加粗{normal默认  bold粗体 bolder比bold粗}

- line-height:行高（px/数字/em）

- color：颜色(rgb（）)

- text-decoration：文字修饰（none、underline、overline、line-through）

- text-align：文本对齐方式(left/right/center)
- text-tranform：字母大小写（capitalize/uppercase/lowercase/none）
- text-indent：文本缩进 em px



## 3.8css背景图

background-color：背景色（transparent、color）

background-image：背景图（none、URL（））

background-repeat：铺盖方式（repeat、no-repeat、repeat-x、repeat-y）

background-position：位置相对于页面来说移动位置 100px 100px

background-attachment:滚动效果 （scroll fixed）

background：color image repeat attachment position   (复合写法)

## 3.9css伪类选择器

专门用来表示元素的一种特殊状态

a标签的伪类： 

​			a:visited(已被访问状态)  、a:link(未访问状态)  、a:hover(鼠标悬停状态)  、a:active(用户激活)  

：focus获得焦点

：first-child/:last-child/:nth-child(number)

![image-20200529230449651](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200529230449651.png)



![image-20200529230500678](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200529230500678.png)

## 3.10属性选择器

【属性名】：包含有指定属性名的元素（常用）

【属性名=值】：属性名的值为指定值的元素（常用）

【属性名~=值】：属性名的值包含指定值的元素

【属性名^=值】：属性名的值为指定值开头的元素

【属性名$=值】：属性名的值为指定值结尾的元素

![image-20200529231523153](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200529231523153.png)

## 3.11关系选择器

空格：后代选择器（所有后代）

》 : 只选择儿子元素   

+：兄弟选择器

![image-20200529233008176](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200529233008176.png)

## 3.12css伪元素

**css伪类与伪元素的区别与特点**：{

​	伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户的行为动态改变的。

​	伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如before:在一个元素前添加文本

​	这两个都是对大小写不敏感。

**}**

**:before/ :after / :first-letter/ :first-line (常用)**

::selection /::placeholder /::backdrop

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200529234906756.png" alt="image-20200529234906756" style="zoom:80%;" />

# 第四天

## 4.1css浮动

浮动就是让块级标签不独占一行。目的是，把块级标签元素可以排在一行上。

## 4.2浮动的原理

就是让元素脱离文档流，不占用标准流。

## 4.3浮动的属性值

left：左浮动

right：右浮动

none：默认值，不浮动。

## 4.4浮动的清除

因为浮动以后，后面的元素不管是块级还是行级元素，不会显示在下一行会被那个浮动的元素覆盖。因为脱标了。

解决办法清除浮动：{

**1.添加空标签，并设置样式：clear：both；**

![image-20200530154522195](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530154522195.png)

**2.在清除浮动的父级添加样式：overflow：hidden；超出部分隐藏。**

![image-20200530154916774](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530154916774.png)

3.在清除浮动的父级添加伪元素，并如下设置

![image-20200530155812004](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530155812004.png)

}

实际开发中我们使用第二种方案。



## 4.5浮动布局

代码看第四天的

![image-20200530162927159](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530162927159.png)

## 4.6盒子模型

每个元素都是一个盒子，一个盒子由margin（外边距），border（边框线），padding（内边距）和content（内容）组成。

网页上盒子真实的大小等于border+padding+content。

![image-20200530163501979](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530163501979.png)

边框以内是内边距，以外是外边距。

margin：指边框线以外的距离。

​		margin-left

​		margin-right

​		margin-top

​		margin-bottom

​		margin：可以设置任意一个边的边框可以代1到4个参数。

​		1个：表示上下左右都有这样的一个外边距。

​		2个：表示上下 左右。

​		3个：表示上 左右  下   

​		4个：表示  上 右   下  左



padding与margin用法格式差不多

​		padding区域部分只是不能写内容但是可以被颜色图片填充。

## 4.7display属性

none：不显示元素。通常与js一起用。

block：将行级标签转化为块级标签（主要是为了设置宽高）

inline：将块级转为行级。如果没有内容就撑不开就会显示空白

inline-block：将块或行级标签转化为行内块级标签。不会脱离文档流

**table-cell :转为表格元素 通常是与 vertical-align: middle;一起用来设置文字垂直居中**

## 4.8table样式

table一般不用来布局，而是格式化数据。

属性：

​		width

​		height

​		border-collapse：collapse 单线边框

​		border 边框线

td,tr属性

​		width

​		height

​		border 边框线

​		text-align:文本对齐方式

​		vertical-align：文本垂直对齐方式（top、Middle、bottom）

## 4.9列表样式

不是描述性的文本的任何内容都可以是列表。菜单、等等。

列表类型：

​		无序（ul）列表项li

​		有序(ol) 列表项li

​		自定义（dl）列表项          dt:标题     dd:描述，对dt的内容进行解释并说明。

样式（用来修改标识类型就是前面额那个符号）：

​		list-style-image：URL（） 用图像表示标识

​		list-style-position：标识的位置（inside、outside）

​		list-style-type：标识类型（无序和有序不同）none表示没有

​				无序 ：disc、circle、square

​				有序：decimal、decimal-leading-zero等等

​		list-style：ist-style-image  list-style-position  list-style-type          （ none表示没有）

# 第五天

## 5.1定位

​		会将元素转化块级。

## 5.2定位的分类

​		1：static静态定位  默认值，没有定位。不能设置偏移值（left、right、bottom），占用标准（文档流）流

​		2：relative相对定位    ，占用文档流，可以通过设置偏移值改变，他原来的位置别的元素不能占用了。

​		3:absolute绝对定位

​			  它会脱离文档流，相对于body做偏移

​			 绝对定位一般与相对定位结合使用，它相对于父级是relative定义的元素做偏移。

​		4：fixed固定定位

​			脱离文档流，相对于浏览器左上角（0,0）做偏移，它与relative元素没有关系，也就是他跟父级的定位没有任何关系。

​			一般用于开发导航栏。

## 5.3z-index

可以用来调整显示的层次。一般用于absolute定位。static和relative将无效。

文档流默认的z-index的值为0  absolute对应的默认为1

## 5.4网站布局

先整体再局部，置顶向下，逐步细化。

#### 双飞翼布局

​		由三列组成，两端固定，中间自适应。

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531164802984.png" alt="image-20200531164802984" style="zoom:67%;" />

​		![image-20200531164604340](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531164604340.png)

![image-20200531164656677](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531164656677.png)



#### 圣杯布局

​		外观与双飞翼一样，只是不一样的实现方案。主要用到定位。

![image-20200531171145818](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531171145818.png)

#### 侧边栏布局

两栏布局	

左侧固定，右侧自适应

​					 	  ![image-20200531173024837](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531173024837.png)

右侧固定，左侧自适应

![image-20200531174744794](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531174744794.png)

左侧固定，右侧也固定

![image-20200531175003931](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531175003931.png)



三栏布局

左侧固定，中间自适应，右侧固定

![image-20200531180432428](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531180432428.png)

左侧自适应，中间右侧固定

![image-20200531181053798](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531181053798.png)

右侧自适应，左侧和中间固定

![image-20200531182331288](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531182331288.png)

#### BFC & IFC

BFC：块级格式上下文

​		形成BFC的条件：

​				1、必须是一个浮动元素除none以外。

​				2、定位元素（absolute、fixed）。

​				3、display（inline-block、table-cell、table-caption）

​				4、overflow（hidden）

​		BFC特性

​				1、内部的盒子会在垂直方向上一个接一个的放置（块级元素都有这个这个特性）

​				2、垂直方向上的距离由margin最大值决定，如果想要”相加“ 则把其中一个变成一个独立的容器 也就是用一个div抱起来

​				3、BFC的区域不会与float元素区域重叠（消除浮动就是利用的这个）

​				4、计算BFC的高度时，浮动元素也参与计算。（撑开父元素就得把他设置成一个BFC）

​				5、BFC就是页面上一个独立的容器，容器里面的子元素不会影响到外面的元素。

​		BFC作用

​				1、解决margin重叠的问题（添加独立BFC）

​				2、解决浮动高度塌陷的问题（在父级添加overflow：hidden）就是父级不会被撑开。

​				3、解决侵占浮动元素的问题（添加overflow：hidden清除浮动）就是不会跳到下一行的问题。





IFC：内联格式上下文

​		形成的条件			

​				1、font-size

​				2、line-hight

​				3、height

​				4、vertical-align

​		IFC特性

​				1、IFC的元素会在一行中从左至右排列（行内元素是不识别宽高的）

​				2、在一行中的所有元素会在该区域行成一个行框

​				3、行宽的高度为包含框的高度，高度为行框中最高元素的高度

​				4、浮动的元素不会在行框中，并且浮动元素会压缩行框的宽度

​				5、行框的宽度容纳不下子元素时，子元素会换下一行显示，并且产生新行框

​				6、行框的元素内遵循text-align和vertical-align

​			**容器的高度 = line-hight + vertical-align**



# 第六天



## HTML5新特性

​		1、增减了了audio和video音频视频播放，抛弃了Flash

​		2、新增了canvas画布（绘画，制作动画（如小游戏开发））

​		3、地理定位

​		4、增加了离线缓存

​		5、硬件加速

​		6、web socket（全双工通信）

​		7、增加了本地存储

​		8、新增了一些语义化标签

## 网页布局标签

​		header：页首

​		nav：导航栏

​		aside：侧边栏

​		main：主体

​		section：区块

​		article：文章

​		footer：页尾

## 语义化标签

​		mark：高亮显示

​		summary（摘要）detail（名词解释）

​		meter：用来定义度量衡。

​				属性：value、min、max

​		progress：进度条

​				属性：value、min、max

​		dialog：对话框或窗口。属性为open才会显示，默认是没有的。

## HTML多媒体

​		audio：播放音乐或音频，ie9一下不支持。

​				支持的格式：mp3、ogg、wav

​				属性：

​						src：文件路径

​						autoplay：自动播放

​						loop:循环

​						controls：控制条

​						muted：静音

​						preload：预加载（当使用autoplay的时候，它会失效）

​			video：加载视频的

​					支持的格式：mp4、webm、ogg

​					属性：

​						src：文件路径

​						autoplay：自动播放

​						loop:循环

​						controls：控制条

​						muted：静音

​						width：宽度

​						height：高度

​						poster：海报

​		embed：嵌入内容或加载插件

​				属性：

​						src：文件路径

​						width：宽

​						height：高 

​						type：类型

## canvas

画布这是一个容器元素。

他必须结合js使用。

canvas的宽高最好不要通过css实现而是直接使用width实现。

## HTML5常用属性

contentEditable:将标签转化为可编辑状态。 true和false。

hidden：隐藏元素。一般用来存值或当某个条件成立时执行内容显示。

data-*：用于存储页面的自定义数据，一般用于传值。

multiple：规定输入域中可选择多个内容，多用于表单中。如file、select。

required：约束单元中必须输入值，与表单提交时一块使用。

pattern：用于验证输入字段的模式。需要结合提交按钮一块使用。

## 新增表单组件

color

**Email**

tel

url

**number**

range：范围

serch

date

datetime

datetime-local:本地时间

year

month

time

## 表单属性

​		formaction：修改action

​		formenctype：修改表单请求的类型

​		formethod：修改数据提交的方法

​		form：设置表单元素属于哪一个表单

​		novalidate：不验证

## input属性

​		autocompete：自动完成，用来帮助用户输入，浏览器是否保存输入的值，已备以后使用。（on/off）默认为on

​		autofocus：自动获焦

​		step：步长

​		multiple：多选

​		pattern：正则匹配

​		placeholder：输入提示

​		required：必须输入



# 第七天

## css3的新特性

选择器

阴影

形状转换

变形

动画（过渡动画，帧动画）

边框

多重背景

反射

文字效果

颜色（rgba/hsl/hsla）

滤镜（filter）

弹性布局

多列布局

盒模型

web字体

媒体查询（响应式网站）

## css3兼容处理

通常做法是加厂商前缀。

主流浏览器内核

​		Trident：IE内核

​		Webkit：Chrome和Apple的内核

​		Gecke ：Firefox的内核

​		Blink：Chrome和Opera内核

​		**目前国内的浏览器大多都是双核的（IE+Chrome内核）**

厂商前缀

​		IE：-ms-

​		Chrome&Safari：-webkit-

​		Firefox: -moz-

​		Opera : -o-

## css选择器



#### 属性选择器

![image-20200602092322933](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602092322933.png)

![image-20200602092707859](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602092707859.png)

#### 结构性伪类

![image-20200602094052535](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602094052535.png)

#### 目标伪类



#### UI元素状态伪类



#### 否定伪类

#### 通用兄弟元素选择器



## css文本处理

#### 文本阴影

​		text-shadow：水平偏移 垂直偏移 模糊 颜色；  前两个必需 后两个可选

#### 文本自动换行

​		word-wrap：normal  |  break-Word

#### 单词拆分

​		word-beak ：normal（默认换行） | break-all （允许单词内换行）| keep-all（只能在半角空格或连字符处换行）

#### 文本溢出（重要）必须先加上宽度

​		单行溢出（重要）

​				text-overflow：clip | ellipsis | string

​		多行溢出

​				display：-webkit-box

​				-webkit-box-orient : vertical

​				-webkit-line-clamp:行数

​				overflow:hidden

## css3边框

#### 圆角边框

border-radius：1-4个值  按照左上顺时针对应4个值

#### 边框阴影

box-shadow:水平偏移  垂直偏移 【 模糊度距离 】 【阴影的尺寸】【 颜色】 【 inset/outset】

#### 边框图片

border-image:图片 向内偏移距离 宽度  图像区域超出边框的距离 重复效果

重复效果：round（铺满）、strech（拉伸）、repeat（平铺）



## css3背景（重点）

#### 多重背景

​		background：color（背景色） URL（背景图片）可以写多个中间用，  平铺方式   位置

#### background-size：设定背景图像的尺寸

​		background-size：固定长度|百分比|cover|contain

#### background-origin：指定背景图像的位置区域

​		background-origin：padding-box | border-box | content-box

background-clip：设定背景的绘治区域。

​		background-clip：padding-box | border-box | content-box

## css3颜色

#### rgba(r,g,b,a)

​		a:不透明度   取值范围：0-1的一个小数

#### hsl(h,s,l)

​		h:色调    取值0-360

​		s:饱和度  取值0-100%

​		i:亮度       取值0-100%

#### hsla(h,s,l,a)  通常与：hover形成遮罩层

​		h:色调      取值0-360

​		s:饱和度    取值0-100%

​		i:亮度         取值0-100%

​		a:不透明度   取值范围：0-1的一个小数

#### opacity ：调整元素的不透明度，大部分情况下用来做元素的遮罩效果。取值0-1	

​		通常是用来与：hover一块使用提升用户体验

## css3渐变（找个专门的网站直接copy）

#### 线性渐变

​		background：linear-gradient（方向和角度，颜色1...）

#### 径向渐变

​		background（或者image）：radial-gradient（形状（几何图形），渐变大小，圆心位置，颜色1..）

## 文字渐变

​	自己从网上找就行

## box-sizing

允许你以某种方式定义某些元素，以适应指定的区域。

box-sizing:content-box/border-box

# 动画（2d）

## 变形（transform）

## scale（缩放）

## rotate（旋转）

## skew（扭曲）

## matrix（将前面的综合起来） 定义2d变形

## transform-origin（）：设置元素的基点



# 动画（3d）

## perspective：让子元素获得透视效果

## transform-style：在3d空间中呈现被嵌套的元素（必须与transform一起使用）

## rotatez

## transition（过渡动画）

## 关键帧动画

#### 	步骤1：设置关键帧

#### 	步骤2：实施动画（animation）





# 基础布局



## 多列布局

![image-20200602180908907](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602180908907.png)

## 

## flex布局

**为了使用不同大小的屏幕采取的布局方式。会使块级元素在一行上。**

![image-20200602181731537](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602181731537.png)

#### 常用的属性：

#### 		**flex-direction**![image-20200602182411699](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602182411699.png)

**justify-content**

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602183136686.png)



#### **align-items**

![image-20200602184251218](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200602184251218.png)

#### flex-**grow**(用于子元素)

![image-20200603202248485](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603202248485.png)

#### **flex(用于子元素)**

自己查文档

## 响应式布局（重要）

#### 用框架响应式bootstrap（直接上案例）





## web字体

开发者引入外部字体。

![image-20200603210740283](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603210740283.png)











